window.BENCHMARK_DATA = {
  "lastUpdate": 1694144261928,
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
          "id": "1236953b4d868d2d6b730090f3e57d866724f075",
          "message": "Release 3.3.1",
          "timestamp": "2023-09-08T12:23:09+09:00",
          "tree_id": "fab2e0507c99a95eceeee8893e42c3adbf3b822b",
          "url": "https://github.com/greymistcube/libplanet/commit/1236953b4d868d2d6b730090f3e57d866724f075"
        },
        "date": 1694144254605,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1471035.0606060605,
            "unit": "ns",
            "range": "± 86964.98535873658"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2776763.6363636362,
            "unit": "ns",
            "range": "± 88062.15886726623"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1804384.380952381,
            "unit": "ns",
            "range": "± 84172.47764122645"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4827071.815789473,
            "unit": "ns",
            "range": "± 151185.2186139357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 277741.76470588235,
            "unit": "ns",
            "range": "± 4986.9786385321995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 268988.5909090909,
            "unit": "ns",
            "range": "± 6347.648418408423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 246455.94915254237,
            "unit": "ns",
            "range": "± 10868.903680754003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4558908.8,
            "unit": "ns",
            "range": "± 61555.99174990429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4142597,
            "unit": "ns",
            "range": "± 88076.29565136506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22060.15053763441,
            "unit": "ns",
            "range": "± 1695.1033760077787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97170.52577319587,
            "unit": "ns",
            "range": "± 7310.401817349006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88969.03092783505,
            "unit": "ns",
            "range": "± 7831.150208799695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95106.59782608696,
            "unit": "ns",
            "range": "± 11902.469840709793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5951.135416666667,
            "unit": "ns",
            "range": "± 875.1347880519731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19421.105263157893,
            "unit": "ns",
            "range": "± 1533.3765028329112"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50176.30864197531,
            "unit": "ns",
            "range": "± 2654.8407892092855"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8031497.142857143,
            "unit": "ns",
            "range": "± 100919.7399016871"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22319813.23529412,
            "unit": "ns",
            "range": "± 456381.1721916957"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56841757.666666664,
            "unit": "ns",
            "range": "± 970732.2150022828"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112544023.46666667,
            "unit": "ns",
            "range": "± 820101.914632467"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 225486203.86666667,
            "unit": "ns",
            "range": "± 2388927.0335828555"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3608189.052631579,
            "unit": "ns",
            "range": "± 121786.07553831505"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3901195.3571428573,
            "unit": "ns",
            "range": "± 63291.809908376155"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4533771.05,
            "unit": "ns",
            "range": "± 100671.56171979569"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4093742.3333333335,
            "unit": "ns",
            "range": "± 105233.6523252431"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6365417.708333333,
            "unit": "ns",
            "range": "± 143258.84437724092"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5126305.055208334,
            "unit": "ns",
            "range": "± 42433.1334779206"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1625740.9705528845,
            "unit": "ns",
            "range": "± 892.0499716584665"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1062051.4140625,
            "unit": "ns",
            "range": "± 1281.0495310158633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2707917.7138020834,
            "unit": "ns",
            "range": "± 8203.716038671895"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 838017.6408342634,
            "unit": "ns",
            "range": "± 332.90159809603693"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 768685.7970052083,
            "unit": "ns",
            "range": "± 318.8144147470444"
          }
        ]
      }
    ]
  }
}