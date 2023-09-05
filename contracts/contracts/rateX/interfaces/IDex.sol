// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IDex {

    /// @notice Swap tokenIn for tokenOut on single dex
    /// @param _tokenIn The contract address of the input token
    /// @param _tokenOut The contract address of the output token
    /// @param _amountIn The amount of tokenIn for swap
    /// @param _amountOutMin The minimum acceptable amount of tokenOut
    /// @param _to The recipient address of the swap
    /// @return amountOut The amount of tokenOut received
    function swap(
        address _poolAddress,
        address _tokenIn,
        address _tokenOut,
        uint _amountIn,
        uint _amountOutMin,
        address _to
    ) external returns(uint256 amountOut);
}
