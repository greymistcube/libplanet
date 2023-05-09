window.BENCHMARK_DATA = {
  "lastUpdate": 1683611908332,
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
          "id": "7dc62bcb53bd9845dec31a420c38e688771eb257",
          "message": "Prepare 1.1.1",
          "timestamp": "2023-05-09T14:43:42+09:00",
          "tree_id": "420b344b806a9c3672a93cf625fccbb244156ea8",
          "url": "https://github.com/greymistcube/libplanet/commit/7dc62bcb53bd9845dec31a420c38e688771eb257"
        },
        "date": 1683611894095,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7939112.352941177,
            "unit": "ns",
            "range": "± 159880.1568964787"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20258065.4,
            "unit": "ns",
            "range": "± 768921.2850868771"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50559788.166666664,
            "unit": "ns",
            "range": "± 948584.0315684928"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99128257.60526316,
            "unit": "ns",
            "range": "± 2104276.979892299"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204262272.65384614,
            "unit": "ns",
            "range": "± 2536961.680292026"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58368.07526881721,
            "unit": "ns",
            "range": "± 7172.787359537614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 321153.3695652174,
            "unit": "ns",
            "range": "± 24659.695619101945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 306214.612244898,
            "unit": "ns",
            "range": "± 25148.66147803409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 286260.26,
            "unit": "ns",
            "range": "± 20190.878156977204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4133959.8333333335,
            "unit": "ns",
            "range": "± 85188.45426412998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3776730.8636363638,
            "unit": "ns",
            "range": "± 88876.95285178612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16838.17816091954,
            "unit": "ns",
            "range": "± 1795.3754578778407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82495.46739130435,
            "unit": "ns",
            "range": "± 6891.354944925341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79728.47727272728,
            "unit": "ns",
            "range": "± 7834.545190647963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93031.02173913043,
            "unit": "ns",
            "range": "± 13196.039678945854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4650.452380952381,
            "unit": "ns",
            "range": "± 556.8780426014408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15559.252873563219,
            "unit": "ns",
            "range": "± 1871.7228304201626"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1742878.423076923,
            "unit": "ns",
            "range": "± 23767.766188199577"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2917598.1842105263,
            "unit": "ns",
            "range": "± 100093.70339751654"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2494138.094736842,
            "unit": "ns",
            "range": "± 198602.42025817765"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6661706.070707071,
            "unit": "ns",
            "range": "± 430918.7193184181"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3256322.4285714286,
            "unit": "ns",
            "range": "± 92643.38548121825"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3439501.051020408,
            "unit": "ns",
            "range": "± 136780.4193545049"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4448582.862318841,
            "unit": "ns",
            "range": "± 213132.2661266094"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4426213.796875,
            "unit": "ns",
            "range": "± 202142.2229693093"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7760806.616279069,
            "unit": "ns",
            "range": "± 282854.0619187123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6026297.033482143,
            "unit": "ns",
            "range": "± 44575.81967189779"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2079618.5805664062,
            "unit": "ns",
            "range": "± 34596.85054251502"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1234599.139453125,
            "unit": "ns",
            "range": "± 12073.155078354363"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2405186.8115985575,
            "unit": "ns",
            "range": "± 14514.98113198382"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 817870.4963942308,
            "unit": "ns",
            "range": "± 4321.197322192203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 772526.7935267857,
            "unit": "ns",
            "range": "± 4543.661049432011"
          }
        ]
      }
    ]
  }
}