window.BENCHMARK_DATA = {
  "lastUpdate": 1693810079329,
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
          "id": "44a6c3a355196c9a670cb3dd891521a002634ea0",
          "message": "Account overhaul",
          "timestamp": "2023-09-04T15:31:54+09:00",
          "tree_id": "3fabf264f5b3fd83d5b10677ac599d2f808b7024",
          "url": "https://github.com/greymistcube/libplanet/commit/44a6c3a355196c9a670cb3dd891521a002634ea0"
        },
        "date": 1693810065076,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8276527.208333333,
            "unit": "ns",
            "range": "± 214605.03274731568"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20493627.9,
            "unit": "ns",
            "range": "± 814290.4769208088"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51008956.5,
            "unit": "ns",
            "range": "± 1632899.017251169"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100139053.5,
            "unit": "ns",
            "range": "± 1945908.532175926"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210122200.6111111,
            "unit": "ns",
            "range": "± 4425205.5655735945"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73659.45555555556,
            "unit": "ns",
            "range": "± 12300.987926125146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 320743.5425531915,
            "unit": "ns",
            "range": "± 30461.579351353652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 288833.4791666667,
            "unit": "ns",
            "range": "± 24588.030878106514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 275199.0303030303,
            "unit": "ns",
            "range": "± 12879.784767635136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3983212.1428571427,
            "unit": "ns",
            "range": "± 44731.076113656316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3614974.6,
            "unit": "ns",
            "range": "± 63363.63795900611"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21897.948979591838,
            "unit": "ns",
            "range": "± 3436.9152987186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103144.54639175258,
            "unit": "ns",
            "range": "± 16152.906209113873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 120087.36170212766,
            "unit": "ns",
            "range": "± 24768.56616918796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97428.78021978022,
            "unit": "ns",
            "range": "± 17253.496607806905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5933.145833333333,
            "unit": "ns",
            "range": "± 1082.979321172717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20340.097701149425,
            "unit": "ns",
            "range": "± 3128.593593159304"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1609212.7171717172,
            "unit": "ns",
            "range": "± 182880.406892159"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2955062.3608247424,
            "unit": "ns",
            "range": "± 203573.5127603471"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2006460.1224489796,
            "unit": "ns",
            "range": "± 218075.02484469832"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5292960.851851852,
            "unit": "ns",
            "range": "± 270357.45324926364"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3284089.86,
            "unit": "ns",
            "range": "± 164844.41882031216"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3700771.8846153845,
            "unit": "ns",
            "range": "± 39632.03864202643"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4358503.96491228,
            "unit": "ns",
            "range": "± 188453.22078672895"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3768771.4696969697,
            "unit": "ns",
            "range": "± 177448.50230611608"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6579204.372881356,
            "unit": "ns",
            "range": "± 268452.3169110169"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5844665.498046875,
            "unit": "ns",
            "range": "± 70546.3581623844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1755746.81984375,
            "unit": "ns",
            "range": "± 45966.71495058632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1037793.765522204,
            "unit": "ns",
            "range": "± 21044.72070734259"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2497505.905989583,
            "unit": "ns",
            "range": "± 42010.0448786886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 828390.0959388469,
            "unit": "ns",
            "range": "± 23873.022042519417"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 764141.6877092634,
            "unit": "ns",
            "range": "± 8093.783286061704"
          }
        ]
      }
    ]
  }
}