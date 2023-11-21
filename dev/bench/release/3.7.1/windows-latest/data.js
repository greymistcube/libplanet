window.BENCHMARK_DATA = {
  "lastUpdate": 1700526438201,
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
          "id": "f1142cf897d8e43294230fcf03a832bc254509a4",
          "message": "Release 3.7.1",
          "timestamp": "2023-11-21T09:14:45+09:00",
          "tree_id": "b6b49167f5b1d662728c77d704f5f4d189bd5805",
          "url": "https://github.com/greymistcube/libplanet/commit/f1142cf897d8e43294230fcf03a832bc254509a4"
        },
        "date": 1700526409218,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 933223.1578947369,
            "unit": "ns",
            "range": "± 87134.31604410976"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1714444.8275862068,
            "unit": "ns",
            "range": "± 90600.93274151607"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1292661.616161616,
            "unit": "ns",
            "range": "± 105858.4602839466"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5030570.37037037,
            "unit": "ns",
            "range": "± 209630.6380006021"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34207.77777777778,
            "unit": "ns",
            "range": "± 2402.5374122952076"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5070306.666666667,
            "unit": "ns",
            "range": "± 62541.648599343855"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13016040,
            "unit": "ns",
            "range": "± 95110.87364604682"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32175307.14285714,
            "unit": "ns",
            "range": "± 334285.4088356827"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65446360,
            "unit": "ns",
            "range": "± 706475.5458309529"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130393910,
            "unit": "ns",
            "range": "± 528141.9557548627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3314341.7708333335,
            "unit": "ns",
            "range": "± 8264.816223304468"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1059583.7890625,
            "unit": "ns",
            "range": "± 1476.6891290636825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 722279.8060825893,
            "unit": "ns",
            "range": "± 1475.032844913138"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1923894.447544643,
            "unit": "ns",
            "range": "± 3089.0731702352045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 600899.2317708334,
            "unit": "ns",
            "range": "± 1275.9270900405188"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568747.9191706731,
            "unit": "ns",
            "range": "± 913.6475035681027"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2100927.272727273,
            "unit": "ns",
            "range": "± 49290.25965613994"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2222832,
            "unit": "ns",
            "range": "± 55458.1653140455"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2793933.3333333335,
            "unit": "ns",
            "range": "± 48802.65898298497"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2714987.5,
            "unit": "ns",
            "range": "± 49765.01950835212"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5731766.666666667,
            "unit": "ns",
            "range": "± 198020.76756230622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 168801.1235955056,
            "unit": "ns",
            "range": "± 9151.49633048188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 162708.45070422534,
            "unit": "ns",
            "range": "± 7943.060699735212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 139530.76923076922,
            "unit": "ns",
            "range": "± 3811.6420850619465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2644285.714285714,
            "unit": "ns",
            "range": "± 32485.496341097707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2467433.3333333335,
            "unit": "ns",
            "range": "± 21781.073240663587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10196.666666666666,
            "unit": "ns",
            "range": "± 1091.8955788243582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52244.791666666664,
            "unit": "ns",
            "range": "± 5536.498414429688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44256.52173913043,
            "unit": "ns",
            "range": "± 2132.7611391635824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56023.958333333336,
            "unit": "ns",
            "range": "± 13609.615368644923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2457.1428571428573,
            "unit": "ns",
            "range": "± 545.0810967753841"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10156.25,
            "unit": "ns",
            "range": "± 1501.635073756884"
          }
        ]
      }
    ]
  }
}