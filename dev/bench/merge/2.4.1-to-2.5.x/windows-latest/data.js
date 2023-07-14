window.BENCHMARK_DATA = {
  "lastUpdate": 1689324687803,
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
          "id": "71b3f912ea5fa366f1a67c91704479fd1a3be0e0",
          "message": "Merge tag '2.4.1' into port/2.4.1-to-2.5.1\n\nLibplanet 2.4.1",
          "timestamp": "2023-07-14T17:35:32+09:00",
          "tree_id": "e42dafe523e0e77b5f490a7f80835e4746fbf95e",
          "url": "https://github.com/greymistcube/libplanet/commit/71b3f912ea5fa366f1a67c91704479fd1a3be0e0"
        },
        "date": 1689324666308,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1447993.6842105263,
            "unit": "ns",
            "range": "± 101866.09045810271"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2770562.8571428573,
            "unit": "ns",
            "range": "± 133793.13599021154"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1865698.9583333333,
            "unit": "ns",
            "range": "± 118063.58901683062"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5138076.7441860465,
            "unit": "ns",
            "range": "± 279075.11393442133"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51657.44680851064,
            "unit": "ns",
            "range": "± 3312.033756571199"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8050500,
            "unit": "ns",
            "range": "± 94329.39248036259"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21166816.666666668,
            "unit": "ns",
            "range": "± 259686.76094387987"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53082693.333333336,
            "unit": "ns",
            "range": "± 843881.1099968548"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106518826.66666667,
            "unit": "ns",
            "range": "± 820150.3507342563"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212223740,
            "unit": "ns",
            "range": "± 1939506.9420565926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5060552.1875,
            "unit": "ns",
            "range": "± 23654.920116701705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1574030.4947916667,
            "unit": "ns",
            "range": "± 5010.813900104635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1219464.0885416667,
            "unit": "ns",
            "range": "± 6228.465508268243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2731768.1380208335,
            "unit": "ns",
            "range": "± 8276.38594632391"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 859278.4830729166,
            "unit": "ns",
            "range": "± 3079.7477966025617"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 805052.4544270834,
            "unit": "ns",
            "range": "± 2132.1021109700464"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3419333.3333333335,
            "unit": "ns",
            "range": "± 62894.51107854742"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3556825.4716981133,
            "unit": "ns",
            "range": "± 147761.04137536022"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4364105.882352941,
            "unit": "ns",
            "range": "± 70295.49657151084"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4013538.4615384615,
            "unit": "ns",
            "range": "± 54357.77372283162"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6536771.428571428,
            "unit": "ns",
            "range": "± 209529.9382952632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 285848.14814814815,
            "unit": "ns",
            "range": "± 10945.883015842346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 275871.4285714286,
            "unit": "ns",
            "range": "± 9049.587947349135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 250263.76811594202,
            "unit": "ns",
            "range": "± 12065.068330838078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4250200,
            "unit": "ns",
            "range": "± 44486.065233958376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3946253.3333333335,
            "unit": "ns",
            "range": "± 37816.09382764106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22489.247311827956,
            "unit": "ns",
            "range": "± 2028.2495325854045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99238.38383838384,
            "unit": "ns",
            "range": "± 8673.707714964467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84676.5306122449,
            "unit": "ns",
            "range": "± 8831.665159455717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103914.73684210527,
            "unit": "ns",
            "range": "± 16640.7917698613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6145.918367346939,
            "unit": "ns",
            "range": "± 864.1983792094467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22151.041666666668,
            "unit": "ns",
            "range": "± 2326.8227621945484"
          }
        ]
      }
    ]
  }
}