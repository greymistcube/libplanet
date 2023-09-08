window.BENCHMARK_DATA = {
  "lastUpdate": 1694144784212,
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
          "id": "3c1f78823463023c40ab0bbe7fd293285de5bd1e",
          "message": "Prepare 3.3.2",
          "timestamp": "2023-09-08T12:31:29+09:00",
          "tree_id": "7ade798411f9b01c80af1bba967751e414104264",
          "url": "https://github.com/greymistcube/libplanet/commit/3c1f78823463023c40ab0bbe7fd293285de5bd1e"
        },
        "date": 1694144776629,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1499481.4680851065,
            "unit": "ns",
            "range": "± 93407.3469984236"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2867641.263157895,
            "unit": "ns",
            "range": "± 118854.75767695364"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1870642.719512195,
            "unit": "ns",
            "range": "± 98896.65296503105"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5016518.6630434785,
            "unit": "ns",
            "range": "± 280076.1074334278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 293628.26923076925,
            "unit": "ns",
            "range": "± 12104.670634965478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 282960.54285714286,
            "unit": "ns",
            "range": "± 9258.418275350523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 257194.89130434784,
            "unit": "ns",
            "range": "± 14386.653701028958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4594311,
            "unit": "ns",
            "range": "± 48084.67195033599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4207335.428571428,
            "unit": "ns",
            "range": "± 43737.74996272897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24585.625,
            "unit": "ns",
            "range": "± 2373.4518111813436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95665.61458333333,
            "unit": "ns",
            "range": "± 6345.195114365203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79299.63636363637,
            "unit": "ns",
            "range": "± 4382.053862078459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97429.18181818182,
            "unit": "ns",
            "range": "± 13515.831378963116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7053.1752577319585,
            "unit": "ns",
            "range": "± 1132.5102557511095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25824.145833333332,
            "unit": "ns",
            "range": "± 3330.239201079033"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49190.48101265823,
            "unit": "ns",
            "range": "± 1916.1141624676798"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8422904.933333334,
            "unit": "ns",
            "range": "± 156032.32995461763"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23113780.466666665,
            "unit": "ns",
            "range": "± 264110.9433976743"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58619523.266666666,
            "unit": "ns",
            "range": "± 484705.0465939448"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117116079.26666667,
            "unit": "ns",
            "range": "± 618393.5082327048"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 260649126.8,
            "unit": "ns",
            "range": "± 853694.2374514928"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3790809.533333333,
            "unit": "ns",
            "range": "± 54524.71628519448"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3896482.4,
            "unit": "ns",
            "range": "± 113850.36643455634"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4706946.933333334,
            "unit": "ns",
            "range": "± 78596.92342621731"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4288089.787878788,
            "unit": "ns",
            "range": "± 135391.63543489252"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6561530.642857143,
            "unit": "ns",
            "range": "± 167125.66926744062"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5128616.778846154,
            "unit": "ns",
            "range": "± 22087.488441626407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1579702.84765625,
            "unit": "ns",
            "range": "± 976.4784824708561"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1087360.890345982,
            "unit": "ns",
            "range": "± 506.431062544182"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2610206.0108816964,
            "unit": "ns",
            "range": "± 1725.5084354012079"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 833603.783203125,
            "unit": "ns",
            "range": "± 423.19753048742473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 762478.0592447916,
            "unit": "ns",
            "range": "± 769.2409895671716"
          }
        ]
      }
    ]
  }
}