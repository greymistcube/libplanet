window.BENCHMARK_DATA = {
  "lastUpdate": 1708405541427,
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
          "id": "670f32c138f053a1c5cc89302e44c02d10638d2f",
          "message": "Prepare 4.0.6",
          "timestamp": "2024-02-20T13:54:42+09:00",
          "tree_id": "ed9db8d13dffc5260b39f9aee313d6d1c82c6e13",
          "url": "https://github.com/greymistcube/libplanet/commit/670f32c138f053a1c5cc89302e44c02d10638d2f"
        },
        "date": 1708405534431,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5908936.846153846,
            "unit": "ns",
            "range": "± 22048.500367924324"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15365915.57142857,
            "unit": "ns",
            "range": "± 70636.56889231753"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38388058.15384615,
            "unit": "ns",
            "range": "± 344768.3524522531"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75370730.35714285,
            "unit": "ns",
            "range": "± 285372.3303412598"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150836584.92857143,
            "unit": "ns",
            "range": "± 1038959.2196568244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203643.0892857143,
            "unit": "ns",
            "range": "± 8525.357200251678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192237.80357142858,
            "unit": "ns",
            "range": "± 8060.854949963474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165124.14705882352,
            "unit": "ns",
            "range": "± 2092.5940224150168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3205985.076923077,
            "unit": "ns",
            "range": "± 33574.2691071142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2916860.7,
            "unit": "ns",
            "range": "± 41794.63312983072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14386.474226804125,
            "unit": "ns",
            "range": "± 2217.241318493093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61058.65934065934,
            "unit": "ns",
            "range": "± 5107.92977246551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58826.989795918365,
            "unit": "ns",
            "range": "± 5903.58172689092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63615.54639175258,
            "unit": "ns",
            "range": "± 12166.452561775333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3589.3105263157895,
            "unit": "ns",
            "range": "± 961.5629264848689"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12151.033333333333,
            "unit": "ns",
            "range": "± 1068.9786099540654"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42115.447916666664,
            "unit": "ns",
            "range": "± 5210.1242552508775"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 996003.2731958763,
            "unit": "ns",
            "range": "± 97855.82948489676"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1899183.7454545454,
            "unit": "ns",
            "range": "± 80264.73429365041"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1623875.9677419355,
            "unit": "ns",
            "range": "± 116698.12417268267"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7789026.34375,
            "unit": "ns",
            "range": "± 239034.20557481152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3819657.7350260415,
            "unit": "ns",
            "range": "± 5726.161959571599"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1198862.1487630208,
            "unit": "ns",
            "range": "± 4083.5172415860634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 761571.8240094866,
            "unit": "ns",
            "range": "± 1809.2844657022079"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1936808.22265625,
            "unit": "ns",
            "range": "± 4413.404364937295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618873.3325570914,
            "unit": "ns",
            "range": "± 981.8412280251193"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569145.1794621394,
            "unit": "ns",
            "range": "± 2043.8662984379898"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2417530.46875,
            "unit": "ns",
            "range": "± 73765.7158690703"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2587220.378378378,
            "unit": "ns",
            "range": "± 87604.7632036293"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3111492.36,
            "unit": "ns",
            "range": "± 82741.08041549454"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3185652.603896104,
            "unit": "ns",
            "range": "± 129003.92189954052"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8951806.264705881,
            "unit": "ns",
            "range": "± 179518.37869772874"
          }
        ]
      }
    ]
  }
}