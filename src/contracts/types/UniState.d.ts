/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { ContractOptions } from "web3-eth-contract";
import { EventLog } from "web3-core";
import { EventEmitter } from "events";
import {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract,
} from "./types";

interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export type GovernanceUpdated = ContractEventLog<{
  oldGovernance: string;
  newGovernance: string;
  0: string;
  1: string;
}>;

export interface UniState extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): UniState;
  clone(): UniState;
  methods: {
    getPoolAddress(
      token0: string,
      token1: string,
      fee: number | string | BN
    ): NonPayableTransactionObject<string>;

    getPoolDetails(pool: string): NonPayableTransactionObject<{
      token0: string;
      token1: string;
      fee: string;
      poolCardinality: string;
      liquidity: string;
      sqrtPriceX96: string;
      currentTick: string;
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
    }>;

    getPositionDetails(
      tokenId: number | string | BN,
      liquidityManagerAddress: string
    ): NonPayableTransactionObject<{
      pool: string;
      token0: string;
      token1: string;
      currentTick: string;
      fee: string;
      liquidity: string;
      fee0: string;
      fee1: string;
      amount0: string;
      amount1: string;
      totalLiquidity: string;
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      7: string;
      8: string;
      9: string;
      10: string;
    }>;

    getTokensOwedAmount(
      liquidityManager: string,
      pool: string,
      userLiquidity: number | string | BN,
      feeGrowth0: number | string | BN,
      feeGrowth1: number | string | BN
    ): NonPayableTransactionObject<{
      tokensOwed0: string;
      tokensOwed1: string;
      feeGrowthGlobal0: string;
      feeGrowthGlobal1: string;
      0: string;
      1: string;
      2: string;
      3: string;
    }>;

    getTotalAmounts(
      pool: string,
      liquidityManager: string
    ): NonPayableTransactionObject<{
      fee0: string;
      fee1: string;
      amount0: string;
      amount1: string;
      totalLiquidity: string;
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
    }>;

    getUserAndIndexShares(
      tokensOwed0: number | string | BN,
      tokensOwed1: number | string | BN
    ): NonPayableTransactionObject<{
      indexAmount0: string;
      indexAmount1: string;
      userAmount0: string;
      userAmount1: string;
      0: string;
      1: string;
      2: string;
      3: string;
    }>;

    setFeesPercentageIndexFund(
      newPercentage: number | string | BN
    ): NonPayableTransactionObject<void>;

    setGovernance(_governance: string): NonPayableTransactionObject<void>;

    shouldReadjust(
      pool: string,
      liquidityManagerAddress: string
    ): NonPayableTransactionObject<boolean>;
  };
  events: {
    GovernanceUpdated(cb?: Callback<GovernanceUpdated>): EventEmitter;
    GovernanceUpdated(
      options?: EventOptions,
      cb?: Callback<GovernanceUpdated>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "GovernanceUpdated", cb: Callback<GovernanceUpdated>): void;
  once(
    event: "GovernanceUpdated",
    options: EventOptions,
    cb: Callback<GovernanceUpdated>
  ): void;
}
