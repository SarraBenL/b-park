// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "../contracts/Rents.sol";

contract TestRents {
    // The address of the adoption contract to be tested
    Rents rentps = Rents(DeployedAddresses.RentParkingSpace());

    // The id of the pet that will be used for testing
    uint expectedParkingSpaceId = 2;

    //The expected renter of the expected Parking Space is this contract
    address expectedRenter = address(this);

   // address expectedReceiver = address(); ????
    uint expectedAmount = 0;

    // Testing the rent() function
    function testUserCanRentParkingSpace() public {
        uint returnedId = rentps.rent(expectedParkingSpaceId);

        Assert.equal(returnedId, expectedParkingSpaceId, "Renting of the expected ParkingSpaceId should match what is returned.");
    }

    // Testing the send() function
   // function testUserCanSendAmountForParkingSpace() public {
     //   uint returnedId = rentps.send(expectedReceiver, expectedAmount);

      //  Assert.equal(returnedId, expectedParkingSpaceId, "Renting of the expected ParkingSpaceId should match what is returned.");
    //}

/*
    it("should emit rented when the amount is sent to the receiver", async () => {
        let expectedParkingSpaceId = await rentps.rent();
    });
*/
    // Testing retrieval of a single renter
    function testGetRenterAddressByParkingSpaceId() public {
        address renter = rentps.renters(expectedParkingSpaceId);

        Assert.equal(renter, expectedRenter, "Renter of the expected ParkingSpaceId should be this contract");
    }

    // Testing retrieval of all renters renting a parking space
    function testGetRenterAddressByParkingSpaceIdInArray() public {
        // Store adopters in memory rather than contract's storage
        address[20] memory renters = rentps.getRenters();

        Assert.equal(renters[expectedParkingSpaceId], expectedRenter, "Renter of the expected ParkingSpaceId should be this contract");
    }
}