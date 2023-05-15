window.BENCHMARK_DATA = {
  "lastUpdate": 1684127766218,
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
          "id": "c551f90e210cec2fb0d2b8328218db7698d1459f",
          "message": "Changelog",
          "timestamp": "2023-05-15T13:59:10+09:00",
          "tree_id": "c0c0a06df54444d921759ddab9a0c0441bf134da",
          "url": "https://github.com/greymistcube/libplanet/commit/c551f90e210cec2fb0d2b8328218db7698d1459f"
        },
        "date": 1684127744197,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1393625,
            "unit": "ns",
            "range": "± 120488.26367829576"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2655390.5263157897,
            "unit": "ns",
            "range": "± 151825.36655832946"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2153282.9787234045,
            "unit": "ns",
            "range": "± 125089.23923214563"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5450944.155844156,
            "unit": "ns",
            "range": "± 276709.76885990443"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50595.58823529412,
            "unit": "ns",
            "range": "± 2444.5757086012713"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7376163.157894737,
            "unit": "ns",
            "range": "± 161243.58457703507"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20122340,
            "unit": "ns",
            "range": "± 269513.5930841761"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50447393.333333336,
            "unit": "ns",
            "range": "± 576739.6373044731"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100211493.33333333,
            "unit": "ns",
            "range": "± 1169234.5404864957"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196568679.16666666,
            "unit": "ns",
            "range": "± 5029098.404544355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4831392.96875,
            "unit": "ns",
            "range": "± 21082.371514861774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1527192.2526041667,
            "unit": "ns",
            "range": "± 5978.714957952946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1168358.671875,
            "unit": "ns",
            "range": "± 6843.752013323762"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2664562.199519231,
            "unit": "ns",
            "range": "± 5132.50566676737"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 836217.3618861607,
            "unit": "ns",
            "range": "± 2510.1516403732226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 765687.6302083334,
            "unit": "ns",
            "range": "± 2906.2719490562363"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3142175,
            "unit": "ns",
            "range": "± 23036.06362364732"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3476254.5454545454,
            "unit": "ns",
            "range": "± 83469.5024275204"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4266636.666666667,
            "unit": "ns",
            "range": "± 126129.96439998005"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4242184.444444444,
            "unit": "ns",
            "range": "± 158675.00369617075"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6702582.75862069,
            "unit": "ns",
            "range": "± 193247.38968661297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 265421.4285714286,
            "unit": "ns",
            "range": "± 9659.862537886916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 253806.25,
            "unit": "ns",
            "range": "± 9979.871364241551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 257637.2093023256,
            "unit": "ns",
            "range": "± 9513.349599273992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4074300,
            "unit": "ns",
            "range": "± 44429.80635010344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3733176.6666666665,
            "unit": "ns",
            "range": "± 52589.508278290465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22673.469387755104,
            "unit": "ns",
            "range": "± 2611.7320958111964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90261.05263157895,
            "unit": "ns",
            "range": "± 7296.097685295248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75457.73195876289,
            "unit": "ns",
            "range": "± 5655.709413422172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102841.05263157895,
            "unit": "ns",
            "range": "± 12921.567775382218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5570.103092783505,
            "unit": "ns",
            "range": "± 982.891667951171"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19644.329896907217,
            "unit": "ns",
            "range": "± 1972.2010267805776"
          }
        ]
      }
    ]
  }
}