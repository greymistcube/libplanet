window.BENCHMARK_DATA = {
  "lastUpdate": 1682993718228,
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
          "id": "4d084d486b5cf5677929370e2331902224b7fa40",
          "message": "Changelog",
          "timestamp": "2023-05-02T10:52:10+09:00",
          "tree_id": "704625ba1eeca124c7cafb0b315bbcec741389b2",
          "url": "https://github.com/greymistcube/libplanet/commit/4d084d486b5cf5677929370e2331902224b7fa40"
        },
        "date": 1682993711096,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 299777.7818181818,
            "unit": "ns",
            "range": "± 12772.741421989118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 273809.0571428572,
            "unit": "ns",
            "range": "± 7926.711134411507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 228697.15384615384,
            "unit": "ns",
            "range": "± 1892.4411415837942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4293510.466666667,
            "unit": "ns",
            "range": "± 62038.07547197662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3873732.4615384615,
            "unit": "ns",
            "range": "± 27773.27724514875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21014.41935483871,
            "unit": "ns",
            "range": "± 1557.8033051214795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88805.60714285714,
            "unit": "ns",
            "range": "± 4693.741942428987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81065.14285714286,
            "unit": "ns",
            "range": "± 5231.480131963995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100840.07142857143,
            "unit": "ns",
            "range": "± 15459.499361234182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6838.468085106383,
            "unit": "ns",
            "range": "± 935.1206891474291"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20566.489361702126,
            "unit": "ns",
            "range": "± 1499.195094039844"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3363334.2083333335,
            "unit": "ns",
            "range": "± 84990.94177053028"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3545316.3421052634,
            "unit": "ns",
            "range": "± 122020.63592583292"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4168964.9285714286,
            "unit": "ns",
            "range": "± 67610.62683821267"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4451038,
            "unit": "ns",
            "range": "± 181940.85371167556"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6834783.720930233,
            "unit": "ns",
            "range": "± 251606.33389316406"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5998753.678571428,
            "unit": "ns",
            "range": "± 28264.78500814217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1873091.0227864583,
            "unit": "ns",
            "range": "± 10566.152187347518"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1331797.0829427084,
            "unit": "ns",
            "range": "± 7828.14992032447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2583228.9145833333,
            "unit": "ns",
            "range": "± 5359.014375788704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 821701.094140625,
            "unit": "ns",
            "range": "± 2071.200076394509"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 764163.6622395833,
            "unit": "ns",
            "range": "± 673.0241386320073"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49578.270833333336,
            "unit": "ns",
            "range": "± 3668.850706260009"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7644859,
            "unit": "ns",
            "range": "± 48553.52312311298"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22118090.4,
            "unit": "ns",
            "range": "± 407517.33783148066"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55213721.85714286,
            "unit": "ns",
            "range": "± 340874.2104661206"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104655186.73333333,
            "unit": "ns",
            "range": "± 1352004.3566792372"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213702522.93333334,
            "unit": "ns",
            "range": "± 3174439.474337218"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1420408,
            "unit": "ns",
            "range": "± 79593.42123330434"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2662651.5217391304,
            "unit": "ns",
            "range": "± 65719.90579785588"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2310527.922222222,
            "unit": "ns",
            "range": "± 128059.93424729237"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5409471.257142857,
            "unit": "ns",
            "range": "± 171290.5753745308"
          }
        ]
      }
    ]
  }
}