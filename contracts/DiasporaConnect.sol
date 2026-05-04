// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

/**
 * @title DiasporaConnect
 * @dev Simple contract for hackathon money transfers with low fees
 */
contract DiasporaConnect {
    address public owner;
    uint256 public constant FEE_PERCENT = 2; // 0.2% (using base 1000)
    uint256 public constant FEE_DIVISOR = 1000;

    event TransferSent(
        address indexed from,
        address indexed to,
        uint256 amount,
        uint256 timestamp
    );

    constructor() {
        owner = msg.sender;
    }

    /**
     * @dev Sends money to a recipient. 
     * In a real app, this might involve holding funds in a vault 
     * or interacting with a local off-ramp provider's address.
     */
    function sendMoney(address payable recipient) public payable {
        require(msg.value > 0, "Amount must be greater than 0");
        require(recipient != address(0), "Invalid recipient address");

        // For this hackathon demo, we just forward the ETH to the recipient.
        // In a production app, the funds would stay in the contract 
        // until the beneficiary triggers a withdrawal to Mobile Money.
        
        (bool success, ) = recipient.call{value: msg.value}("");
        require(success, "Transfer failed");

        emit TransferSent(msg.sender, recipient, msg.value, block.timestamp);
    }

    /**
     * @dev Fallback function to receive ETH
     */
    receive() external payable {}
}
