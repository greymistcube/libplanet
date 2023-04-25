window.BENCHMARK_DATA = {
  "lastUpdate": 1682410634613,
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
          "id": "830a7b220f7d384755e957739e878ab6922828dc",
          "message": "Fix",
          "timestamp": "2023-04-25T17:03:15+09:00",
          "tree_id": "f397dccc7d29e7e3f2177ef9835d74c4f100604b",
          "url": "https://github.com/greymistcube/libplanet/commit/830a7b220f7d384755e957739e878ab6922828dc"
        },
        "date": 1682410626783,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7538057,
            "unit": "ns",
            "range": "± 8335.753420711837"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18788912.714285713,
            "unit": "ns",
            "range": "± 130543.08825201595"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48512099.76923077,
            "unit": "ns",
            "range": "± 160965.93599690267"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97491645.26666667,
            "unit": "ns",
            "range": "± 772926.8220971567"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 194114186.53846154,
            "unit": "ns",
            "range": "± 1141649.6456299261"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45277.27272727273,
            "unit": "ns",
            "range": "± 2048.8492420827884"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1368706.0918367347,
            "unit": "ns",
            "range": "± 89822.5329320638"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2580049.911764706,
            "unit": "ns",
            "range": "± 82168.87357711175"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2158239.5113636362,
            "unit": "ns",
            "range": "± 118283.34565885739"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5367417.285714285,
            "unit": "ns",
            "range": "± 152523.1344749494"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5909556.396763393,
            "unit": "ns",
            "range": "± 14217.062786730383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1850811.7119791666,
            "unit": "ns",
            "range": "± 2612.738059597535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1350519.1099330357,
            "unit": "ns",
            "range": "± 633.6026365732645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2556223.2433035714,
            "unit": "ns",
            "range": "± 2548.221258746965"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 811206.7889322917,
            "unit": "ns",
            "range": "± 1064.1156667390321"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 721581.2026692708,
            "unit": "ns",
            "range": "± 368.24308614903856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 280190,
            "unit": "ns",
            "range": "± 6184.011642938587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 266580.6129032258,
            "unit": "ns",
            "range": "± 8098.919576821833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 233685.7142857143,
            "unit": "ns",
            "range": "± 1848.8487656489801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4209719.133333334,
            "unit": "ns",
            "range": "± 29087.461365599407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3839007.153846154,
            "unit": "ns",
            "range": "± 20274.684012523903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15899.989583333334,
            "unit": "ns",
            "range": "± 1020.6406707738622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81230.62903225806,
            "unit": "ns",
            "range": "± 3709.5142107557754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70905.26315789473,
            "unit": "ns",
            "range": "± 1534.2293339402706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83225.47959183673,
            "unit": "ns",
            "range": "± 11650.62928279611"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4477.551020408163,
            "unit": "ns",
            "range": "± 477.0032337405566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15741.02564102564,
            "unit": "ns",
            "range": "± 648.3617511643946"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3207273.1333333333,
            "unit": "ns",
            "range": "± 30670.65299939869"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3389549.175,
            "unit": "ns",
            "range": "± 119475.18992594398"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4222175.666666667,
            "unit": "ns",
            "range": "± 60523.17698519264"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4203321.942857143,
            "unit": "ns",
            "range": "± 137513.89690007223"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6921266.35,
            "unit": "ns",
            "range": "± 203091.93234523255"
          }
        ]
      }
    ]
  }
}