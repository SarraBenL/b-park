//import RentParkingSpace from '../../build/contracts/RentParkingSpace.json'
App = {
  web3Provider: null,
  contracts: {},

  init: async function() {
    $.getJSON('../../resources/parkingSpace.json', function(data) {
      var carsRow = $('#carsRow');
      var carTemplate = $('#carTemplate');

      for (i = 0; i < data.length; i ++) {
        carTemplate.find('.panel-title').text(data[i].city);
        
        carTemplate.find('.s-streetName').text(data[i].streetName);
        carTemplate.find('.s-number').text(data[i].number);

        carTemplate.find('.s-height').text(data[i].height);
        carTemplate.find('.s-length').text(data[i].length);
        carTemplate.find('.s-width').text(data[i].width);
        carTemplate.find('.owner').text(data[i].name);
        carTemplate.find('.btn-rent').attr('data-id', data[i].id);

        carsRow.append(carTemplate.html());
      }
    });

    return await App.initWeb3();
  },

  initWeb3: async function() {
    // Modern dapp browsers...
    if (window.ethereum) {
      App.web3Provider = window.ethereum;
      try {
        // Request account access
        await window.ethereum.enable();
      } catch (error) {
        // User denied account access...
        console.error("User denied account access")
      }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
      App.web3Provider = window.web3.currentProvider;
    }
    // If no injected web3 instance is detected, fall back to Ganache
    else {
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
    }
    web3 = new Web3(App.web3Provider);

    return App.initContract();
  },

  initContract: function() {
    $.getJSON('RentParkingSpace.json', function(data) {
      // Get the necessary contract artifact file and instantiate it with @truffle/contract
      var RentParkingSpaceArtifact = data;
      App.contracts.RentParkingSpace = TruffleContract(RentParkingSpaceArtifact);
    
      // Set the provider for our contract
      App.contracts.RentParkingSpace.setProvider(App.web3Provider);
    
      return App.markRented();
    });
    return App.bindEvents();
  },

  bindEvents: function() {
    $(document).on('click', '.btn-rent', App.handleRent);
  },

  markRented: function() {
    var rentInstance;

    App.contracts.RentParkingSpace.deployed().then(function(instance) {
      rentInstance = instance;
    
      return rentInstance.getRenters.call();
    }).then(function(renters) {
      for (i = 0; i < renters.length; i++) {
        if (renters[i] !== '0x0000000000000000000000000000000000000000') {
          $('.panel-car').eq(i).find('button').text('Rented').attr('disabled', true);
        }
      }
    }).catch(function(err) {
      console.log(err.message);
    });
  },

  handleRent: function(event) {
    event.preventDefault();

    var parkingSpaceId = parseInt($(event.target).data('id'));

    var rentInstance;

    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }
    
      var account = accounts[0];
    
      App.contracts.RentParkingSpace.deployed().then(function(instance) {
        rentInstance = instance;
        return rentInstance.rent(parkingSpaceId, {from: account});
      }).then(function(result) {
        return App.markRented();
      }).catch(function(err) {
        console.log(err.message);
      });
    });
  },
//   RentParkingSpace.Rented().watch({}, '', function(error, result) {
//     if (!error) {
//         console.log("Rent Parking Space transfer: " + result.args.amount +
//             " coins were sent from " + result.args.from +
//             " to " + result.args.to + ".");
//         console.log("Balances now:\n" +
//             "Sender: " + RentParkingSpace.balances.call(result.args.from) +
//             "Receiver: " + RentParkingSpace.balances.call(result.args.to));
//     }
// })
};

$(function() {
  $(window).load(function() {
    App.init();
  });
});