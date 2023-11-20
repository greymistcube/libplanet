window.BENCHMARK_DATA = {
  "lastUpdate": 1700475451296,
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
          "id": "86ab4423f441b9207d73886941dca2c810502142",
          "message": "Changelog",
          "timestamp": "2023-11-20T18:53:37+09:00",
          "tree_id": "7b2d200491c069bfa925e051918907d9765d8cac",
          "url": "https://github.com/greymistcube/libplanet/commit/86ab4423f441b9207d73886941dca2c810502142"
        },
        "date": 1700475211828,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7561054.071428572,
            "unit": "ns",
            "range": "± 100838.85138462967"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18623722.46153846,
            "unit": "ns",
            "range": "± 85611.02359666792"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49825590.1,
            "unit": "ns",
            "range": "± 4119714.786505373"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94984496.4090909,
            "unit": "ns",
            "range": "± 3491672.262131083"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 238590000.77083334,
            "unit": "ns",
            "range": "± 19427619.25776454"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36077.08888888889,
            "unit": "ns",
            "range": "± 4955.88295888052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 249940.0625,
            "unit": "ns",
            "range": "± 31397.569300089894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 225084.92857142858,
            "unit": "ns",
            "range": "± 22785.510357409574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 235195.21717171717,
            "unit": "ns",
            "range": "± 29739.10095639581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4195750.552083333,
            "unit": "ns",
            "range": "± 418163.5757632946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3700001.9263157896,
            "unit": "ns",
            "range": "± 242655.43687510426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13055.82558139535,
            "unit": "ns",
            "range": "± 1192.3941629379447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61437.085106382976,
            "unit": "ns",
            "range": "± 7999.62597735827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 57042.32967032967,
            "unit": "ns",
            "range": "± 8827.755627759709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64702.1875,
            "unit": "ns",
            "range": "± 14538.128798954836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4093.6288659793813,
            "unit": "ns",
            "range": "± 1361.9911153618962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12684.08888888889,
            "unit": "ns",
            "range": "± 1502.305313860978"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1264177.8229166667,
            "unit": "ns",
            "range": "± 116422.36218007846"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2842465.069892473,
            "unit": "ns",
            "range": "± 173262.6966019843"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1843928.5454545454,
            "unit": "ns",
            "range": "± 157044.82178426153"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8062563.237113402,
            "unit": "ns",
            "range": "± 763334.0103796138"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3846505.005263158,
            "unit": "ns",
            "range": "± 392285.6430727453"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3608219.478021978,
            "unit": "ns",
            "range": "± 438550.03937047365"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3948472.1428571427,
            "unit": "ns",
            "range": "± 423318.0880826845"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3422736.0166666666,
            "unit": "ns",
            "range": "± 150686.58033919858"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13215461,
            "unit": "ns",
            "range": "± 2405131.7206678246"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4426719.0625,
            "unit": "ns",
            "range": "± 100706.61633202895"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1509803.3763950893,
            "unit": "ns",
            "range": "± 174198.95640237982"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 869884.6758961397,
            "unit": "ns",
            "range": "± 17731.585859615272"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2285040.4686328126,
            "unit": "ns",
            "range": "± 296065.8823009216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626174.7648344494,
            "unit": "ns",
            "range": "± 14129.345593773001"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576737.392686632,
            "unit": "ns",
            "range": "± 12236.461852889845"
          }
        ]
      },
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
          "id": "f3f4e5b759618d4e75743079f96e9f52a5b3d858",
          "message": "Merge tag '3.6.1' into port/3.6.1-to-3.7.1\n\nLibplanet 3.6.1",
          "timestamp": "2023-11-20T18:51:01+09:00",
          "tree_id": "e33d04c7f511c4252489a6a9e0fc970da5173b30",
          "url": "https://github.com/greymistcube/libplanet/commit/f3f4e5b759618d4e75743079f96e9f52a5b3d858"
        },
        "date": 1700475422816,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 12278998.11,
            "unit": "ns",
            "range": "± 1638373.6900898968"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26276962.23809524,
            "unit": "ns",
            "range": "± 1076287.84809158"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57969457.57692308,
            "unit": "ns",
            "range": "± 3169535.9781377576"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129212142.78571428,
            "unit": "ns",
            "range": "± 3629750.8148071663"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 241381155.43589744,
            "unit": "ns",
            "range": "± 8271006.517456083"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60642.882978723406,
            "unit": "ns",
            "range": "± 17503.6314923973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 232471.54255319148,
            "unit": "ns",
            "range": "± 28332.37027559914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 219679.90625,
            "unit": "ns",
            "range": "± 23016.084854808603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 202592.9381443299,
            "unit": "ns",
            "range": "± 28096.513430204002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3615205.75,
            "unit": "ns",
            "range": "± 80695.46891334567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3449325,
            "unit": "ns",
            "range": "± 106827.20003638073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14726.932989690722,
            "unit": "ns",
            "range": "± 1903.6061277831814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92949.36666666667,
            "unit": "ns",
            "range": "± 12977.404628079486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93050.24712643678,
            "unit": "ns",
            "range": "± 12588.69176221853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 76312.16326530612,
            "unit": "ns",
            "range": "± 24565.490600267534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3779.994845360825,
            "unit": "ns",
            "range": "± 953.3501141119771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15187.673469387755,
            "unit": "ns",
            "range": "± 3139.8061435513314"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1640511.206521739,
            "unit": "ns",
            "range": "± 348076.0182550294"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 4409668.455555555,
            "unit": "ns",
            "range": "± 1172018.0723381815"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3013776.611111111,
            "unit": "ns",
            "range": "± 826352.9158274622"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 18851850.442528736,
            "unit": "ns",
            "range": "± 10116240.013827363"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3580584.4534883723,
            "unit": "ns",
            "range": "± 132642.70126509995"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3514258.5689655175,
            "unit": "ns",
            "range": "± 153733.16589340504"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4572689.5,
            "unit": "ns",
            "range": "± 157423.30682417855"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4066748.7162162163,
            "unit": "ns",
            "range": "± 196741.6985749889"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12908230.70212766,
            "unit": "ns",
            "range": "± 2525914.1137887407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4450984.677787162,
            "unit": "ns",
            "range": "± 150683.3485307514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1386877.5173502604,
            "unit": "ns",
            "range": "± 61965.30822003659"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 916854.0147512335,
            "unit": "ns",
            "range": "± 31373.681358495887"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2537980.6550143496,
            "unit": "ns",
            "range": "± 168592.23164186813"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 831393.1523542507,
            "unit": "ns",
            "range": "± 67595.28468740296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 711454.1786523438,
            "unit": "ns",
            "range": "± 71109.08672059387"
          }
        ]
      }
    ]
  }
}