window.BENCHMARK_DATA = {
  "lastUpdate": 1692945212427,
  "repoUrl": "https://github.com/greymistcube/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "6fcd8099d02bc91daaa0343e8fb3c79eaa0b5993",
          "message": "Change PathCursor to use Nibbles internally",
          "timestamp": "2023-08-25T15:02:56+09:00",
          "tree_id": "ed0b15e2dee8bfb58845170ff9685d398e0e31ef",
          "url": "https://github.com/greymistcube/libplanet/commit/6fcd8099d02bc91daaa0343e8fb3c79eaa0b5993"
        },
        "date": 1692945205287,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1557351.7676767677,
            "unit": "ns",
            "range": "± 127326.08880974994"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2817173.095238095,
            "unit": "ns",
            "range": "± 96971.0671782982"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1878155.1739130435,
            "unit": "ns",
            "range": "± 105274.52556594239"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4787121.722222222,
            "unit": "ns",
            "range": "± 159514.64719734067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 288693.28846153844,
            "unit": "ns",
            "range": "± 11812.58231026252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 280916.1212121212,
            "unit": "ns",
            "range": "± 8812.971731195357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 252060.72,
            "unit": "ns",
            "range": "± 15258.575949334729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4486849.266666667,
            "unit": "ns",
            "range": "± 78748.37499953041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4116194,
            "unit": "ns",
            "range": "± 27154.040280195168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22467.291666666668,
            "unit": "ns",
            "range": "± 2263.2967752777045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90584.62352941177,
            "unit": "ns",
            "range": "± 4547.3029525529655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75387.49484536082,
            "unit": "ns",
            "range": "± 4369.43530181464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88120.29896907216,
            "unit": "ns",
            "range": "± 14108.279892469873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5402.263157894737,
            "unit": "ns",
            "range": "± 664.1193851038929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20645.382978723403,
            "unit": "ns",
            "range": "± 1581.4171683500601"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49950,
            "unit": "ns",
            "range": "± 3972.1733586903483"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8078950.538461538,
            "unit": "ns",
            "range": "± 48568.815426525456"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22803277.2,
            "unit": "ns",
            "range": "± 364986.4476601837"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57296256.06666667,
            "unit": "ns",
            "range": "± 881757.1292709046"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113796537.46666667,
            "unit": "ns",
            "range": "± 1154283.0744564764"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220626554.33333334,
            "unit": "ns",
            "range": "± 3422476.3198259925"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3484245.703703704,
            "unit": "ns",
            "range": "± 93760.14208066108"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3699432.588235294,
            "unit": "ns",
            "range": "± 103550.27461682199"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4467383.166666667,
            "unit": "ns",
            "range": "± 145749.31494972555"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4224656.217391305,
            "unit": "ns",
            "range": "± 104142.25219379523"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6488338.038461538,
            "unit": "ns",
            "range": "± 171154.0670830771"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5224209.378004808,
            "unit": "ns",
            "range": "± 21927.743806181013"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1610051.0358537945,
            "unit": "ns",
            "range": "± 1348.103889001916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1081948.512890625,
            "unit": "ns",
            "range": "± 1315.0700925814513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2685547.072265625,
            "unit": "ns",
            "range": "± 3560.6540689084873"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 835760.7008463541,
            "unit": "ns",
            "range": "± 716.1751141067656"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 778639.4866536459,
            "unit": "ns",
            "range": "± 514.9755311218609"
          }
        ]
      }
    ]
  }
}