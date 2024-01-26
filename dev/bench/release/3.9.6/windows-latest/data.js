window.BENCHMARK_DATA = {
  "lastUpdate": 1706247452773,
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
          "id": "43f1a0ff33d50a9e90602666c3b215515c5a3cd0",
          "message": "Release 3.9.6",
          "timestamp": "2024-01-26T14:25:55+09:00",
          "tree_id": "27eaabd17f16bc3ddddb2605fb0cb3539cc6672e",
          "url": "https://github.com/greymistcube/libplanet/commit/43f1a0ff33d50a9e90602666c3b215515c5a3cd0"
        },
        "date": 1706247435839,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 948247.4747474748,
            "unit": "ns",
            "range": "± 85939.0592619173"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1701607.2727272727,
            "unit": "ns",
            "range": "± 71992.00021027401"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1323586.7346938776,
            "unit": "ns",
            "range": "± 104705.18517054917"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5196302.857142857,
            "unit": "ns",
            "range": "± 166355.34872801707"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34129.6875,
            "unit": "ns",
            "range": "± 1585.7179724324367"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5199215.384615385,
            "unit": "ns",
            "range": "± 16150.585446243434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13021093.333333334,
            "unit": "ns",
            "range": "± 109360.18775892198"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32662392.85714286,
            "unit": "ns",
            "range": "± 163654.45052250847"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64556971.428571425,
            "unit": "ns",
            "range": "± 235871.57010207392"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128567746.66666667,
            "unit": "ns",
            "range": "± 923325.4826724869"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3321493.2552083335,
            "unit": "ns",
            "range": "± 14307.42895992543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1054926.9010416667,
            "unit": "ns",
            "range": "± 6150.6286541104955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 754261.9661458334,
            "unit": "ns",
            "range": "± 2498.8032702459877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1951426.8179086538,
            "unit": "ns",
            "range": "± 8476.450091954839"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618269.7056361607,
            "unit": "ns",
            "range": "± 1005.8240300941017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576643.4012276785,
            "unit": "ns",
            "range": "± 1500.098292585178"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2120541.8604651163,
            "unit": "ns",
            "range": "± 68663.61493180996"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2226546.511627907,
            "unit": "ns",
            "range": "± 39765.38545517535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2731750,
            "unit": "ns",
            "range": "± 44468.98227546235"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2592282.1428571427,
            "unit": "ns",
            "range": "± 72361.19306579157"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5968700,
            "unit": "ns",
            "range": "± 144423.90572704555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 168729.6875,
            "unit": "ns",
            "range": "± 7772.492801234241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 157254,
            "unit": "ns",
            "range": "± 5892.686923948486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 139815.38461538462,
            "unit": "ns",
            "range": "± 3517.464121516216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2707794.4444444445,
            "unit": "ns",
            "range": "± 57627.69424322693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2505200,
            "unit": "ns",
            "range": "± 64483.28398153647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9594.68085106383,
            "unit": "ns",
            "range": "± 1133.3049036228565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49988.82352941176,
            "unit": "ns",
            "range": "± 2695.547215300813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45492.47311827957,
            "unit": "ns",
            "range": "± 2875.580718633754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60954.63917525773,
            "unit": "ns",
            "range": "± 15798.437558680687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2179.7872340425533,
            "unit": "ns",
            "range": "± 327.7750957343541"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10253.846153846154,
            "unit": "ns",
            "range": "± 1072.6196066233456"
          }
        ]
      }
    ]
  }
}