// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Rents {
  constructor() public {
  }

  address[20] public renters; // array of Ethereum addresses
    //mapping (address => uint) public balances; // key-value pair storage 
    // address of who deposits, uint is the amount
    mapping (address => uint) pendingWithdrawals;


    // Retrieving the renters
    function getRenters() public view returns (address[20] memory) {
        return renters;
    }


    // Events allow clients to react to specific contract changes you declare
    event Rented(address from, address to, uint amount);

    error InsufficientBalance(uint requested, uint available);


    // renting a parking space
    function rent(uint parkingSpaceId) public returns (uint) {
        require(parkingSpaceId >= 0 && parkingSpaceId <= 19);

        renters[parkingSpaceId] = msg.sender; //The address of the person or smart contract who called this function is denoted by msg.sender.

        return parkingSpaceId; //return the Id provided as a confirmation.
    }

    function send(address receiver, uint amount) public {
       /* if (amount > balances[msg.sender])
           revert InsufficientBalance({
                requested: amount,
                available: balances[msg.sender] 
            });
        */
        //balances[msg.sender] -= amount;
        //balances[receiver] += amount;
        //emit Rented(msg.sender, receiver, amount);
    }

    function withdraw() public {
        uint amount = pendingWithdrawals[msg.sender];
        pendingWithdrawals[msg.sender] = 0;
        msg.sender.transfer(amount);
        //emit Rented(msg.sender, receiver, amount);
   }

}
