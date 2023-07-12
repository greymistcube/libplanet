window.BENCHMARK_DATA = {
  "lastUpdate": 1689130055254,
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
          "id": "582920dbcb8729530fce1132e93d68c4532d0f87",
          "message": "Build fix",
          "timestamp": "2023-07-12T11:35:18+09:00",
          "tree_id": "a2613f4c31acfff261c2c7766338cbefcea4e992",
          "url": "https://github.com/greymistcube/libplanet/commit/582920dbcb8729530fce1132e93d68c4532d0f87"
        },
        "date": 1689130047861,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 273567,
            "unit": "ns",
            "range": "± 10934.89635677144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 260774.3829787234,
            "unit": "ns",
            "range": "± 9720.971005250525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 229232.61538461538,
            "unit": "ns",
            "range": "± 1292.452999690997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4121626.4,
            "unit": "ns",
            "range": "± 20463.796162980125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3728360.6923076925,
            "unit": "ns",
            "range": "± 26896.33828356757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15531.763157894737,
            "unit": "ns",
            "range": "± 529.1571285677653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 76994.21794871795,
            "unit": "ns",
            "range": "± 3843.573555840213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68508.91666666667,
            "unit": "ns",
            "range": "± 914.1738901954876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 75028.75,
            "unit": "ns",
            "range": "± 9238.218163807633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3696.8958333333335,
            "unit": "ns",
            "range": "± 433.0051289149664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14272.361445783132,
            "unit": "ns",
            "range": "± 771.517376917519"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1295112.4777777777,
            "unit": "ns",
            "range": "± 70218.33357292046"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2591547.3414634145,
            "unit": "ns",
            "range": "± 93032.03681302741"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1663787.6363636365,
            "unit": "ns",
            "range": "± 85056.68969666937"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4787137.055555556,
            "unit": "ns",
            "range": "± 200028.43981647198"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6277706.820913462,
            "unit": "ns",
            "range": "± 15961.125747110582"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2044057.09609375,
            "unit": "ns",
            "range": "± 2972.289752289695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1330628.4849330357,
            "unit": "ns",
            "range": "± 1402.992604288404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2539682.856863839,
            "unit": "ns",
            "range": "± 5082.7418999093625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 819466.1460286458,
            "unit": "ns",
            "range": "± 1132.389971435072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 727374.4496744792,
            "unit": "ns",
            "range": "± 1120.348579914082"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3173546.2666666666,
            "unit": "ns",
            "range": "± 39260.75998366866"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3335904.75,
            "unit": "ns",
            "range": "± 111435.46714683814"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4198158.411764706,
            "unit": "ns",
            "range": "± 82786.67483814864"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3638630.0555555555,
            "unit": "ns",
            "range": "± 77741.62433000305"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6134758,
            "unit": "ns",
            "range": "± 100872.45462387714"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7533531.615384615,
            "unit": "ns",
            "range": "± 6549.785003322139"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18749862.2,
            "unit": "ns",
            "range": "± 118676.32921955656"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47727831.928571425,
            "unit": "ns",
            "range": "± 147406.28111210934"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96478584.76923077,
            "unit": "ns",
            "range": "± 285165.81072046305"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 190411557.92857143,
            "unit": "ns",
            "range": "± 495260.184674288"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45082.53571428572,
            "unit": "ns",
            "range": "± 2414.842190690323"
          }
        ]
      }
    ]
  }
}