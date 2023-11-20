window.BENCHMARK_DATA = {
  "lastUpdate": 1700490125350,
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
          "id": "042a411a6c690539a60bf06b6782266d92b0912d",
          "message": "Merge tag '3.6.1' into port/3.6.1-to-3.7.1\n\nLibplanet 3.6.1",
          "timestamp": "2023-11-20T22:58:48+09:00",
          "tree_id": "f9aaad040af6fff0f596d095db3d0c052e4f5abf",
          "url": "https://github.com/greymistcube/libplanet/commit/042a411a6c690539a60bf06b6782266d92b0912d"
        },
        "date": 1700489958733,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11484524.370967742,
            "unit": "ns",
            "range": "± 1603872.4621787786"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 32676093.82,
            "unit": "ns",
            "range": "± 4901556.193586971"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 84105255.51162791,
            "unit": "ns",
            "range": "± 11169932.584072692"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122526872.5,
            "unit": "ns",
            "range": "± 3407160.8456855416"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 324058340.8863636,
            "unit": "ns",
            "range": "± 45217069.418893054"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68841.52747252748,
            "unit": "ns",
            "range": "± 12677.81573400355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 259347.29166666666,
            "unit": "ns",
            "range": "± 19526.36983693518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 309007.2912087912,
            "unit": "ns",
            "range": "± 28776.57239473206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 250576.55102040817,
            "unit": "ns",
            "range": "± 33468.191612896815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4774521.2272727275,
            "unit": "ns",
            "range": "± 112117.90869434511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4415324.3125,
            "unit": "ns",
            "range": "± 82408.80174287109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13365.038461538461,
            "unit": "ns",
            "range": "± 1837.295090964446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61688.98888888889,
            "unit": "ns",
            "range": "± 8614.687823899712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52188.87209302326,
            "unit": "ns",
            "range": "± 4660.426092099082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74343.96875,
            "unit": "ns",
            "range": "± 13854.90191152433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6770.586956521739,
            "unit": "ns",
            "range": "± 1187.168634180437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19965.65263157895,
            "unit": "ns",
            "range": "± 4221.834429785185"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1294550.2640449437,
            "unit": "ns",
            "range": "± 133644.80577856896"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3487195.308988764,
            "unit": "ns",
            "range": "± 1029158.1136955505"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2423144.0306122447,
            "unit": "ns",
            "range": "± 646361.233360545"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11434643.575757576,
            "unit": "ns",
            "range": "± 2843144.848833227"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4453439.81,
            "unit": "ns",
            "range": "± 974350.7537475185"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5422833.691919192,
            "unit": "ns",
            "range": "± 1258416.9144328549"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 6255221.102040816,
            "unit": "ns",
            "range": "± 1356505.17536216"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4264664.510869565,
            "unit": "ns",
            "range": "± 287661.4469250648"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 18305554.829787236,
            "unit": "ns",
            "range": "± 4676325.37013239"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4614916.19890625,
            "unit": "ns",
            "range": "± 347066.7547332204"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1397208.2181199596,
            "unit": "ns",
            "range": "± 41448.979083116625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 912739.251030816,
            "unit": "ns",
            "range": "± 19274.031387242525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2010702.1975835755,
            "unit": "ns",
            "range": "± 73543.17285876552"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622144.5505558894,
            "unit": "ns",
            "range": "± 9340.800837568175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 686083.8901643573,
            "unit": "ns",
            "range": "± 28591.089541787005"
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
          "id": "4423414b6ac2e33ad562eb7eb03b11033eda8d11",
          "message": "Changelog",
          "timestamp": "2023-11-20T23:00:01+09:00",
          "tree_id": "acbf576ffed94e9f951fd1e72fa90f9712fea70c",
          "url": "https://github.com/greymistcube/libplanet/commit/4423414b6ac2e33ad562eb7eb03b11033eda8d11"
        },
        "date": 1700490110056,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8385257.385416667,
            "unit": "ns",
            "range": "± 716511.2095911523"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20807124.531578947,
            "unit": "ns",
            "range": "± 1656254.5682289433"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48063371.333333336,
            "unit": "ns",
            "range": "± 561416.2064848231"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99442546.6969697,
            "unit": "ns",
            "range": "± 3150372.9466459053"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216435570.90816328,
            "unit": "ns",
            "range": "± 18338101.605937168"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67698.7311827957,
            "unit": "ns",
            "range": "± 22810.82835406665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 238700.3842105263,
            "unit": "ns",
            "range": "± 21609.737743868864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 230391.1,
            "unit": "ns",
            "range": "± 23079.12897818047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 234596.20967741936,
            "unit": "ns",
            "range": "± 21592.341960489364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3948128.3260869565,
            "unit": "ns",
            "range": "± 93731.52358375498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3704904.175,
            "unit": "ns",
            "range": "± 131322.2450931369"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20870.87951807229,
            "unit": "ns",
            "range": "± 2992.973549537969"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94434.46875,
            "unit": "ns",
            "range": "± 11517.960994581348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98335.02083333333,
            "unit": "ns",
            "range": "± 15674.174263471325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91403.03125,
            "unit": "ns",
            "range": "± 19195.697024376186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7008.422222222222,
            "unit": "ns",
            "range": "± 2060.983125433309"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15267.945652173914,
            "unit": "ns",
            "range": "± 2679.9657836266238"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1383000.5631578946,
            "unit": "ns",
            "range": "± 257010.4676690505"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3659645.347826087,
            "unit": "ns",
            "range": "± 1165074.328563868"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2246155.2365591396,
            "unit": "ns",
            "range": "± 596468.5593286686"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13099317.166666666,
            "unit": "ns",
            "range": "± 6628818.625121534"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3217079.222222222,
            "unit": "ns",
            "range": "± 64424.07365702172"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3275533.03125,
            "unit": "ns",
            "range": "± 281034.4005962504"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4246423.471910113,
            "unit": "ns",
            "range": "± 558327.0721052247"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3900495.305263158,
            "unit": "ns",
            "range": "± 499051.91060746275"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13405454.011627907,
            "unit": "ns",
            "range": "± 2528721.5739216884"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5517680.786702474,
            "unit": "ns",
            "range": "± 686330.3087865984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1708249.813212077,
            "unit": "ns",
            "range": "± 185791.30608410397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 896804.1525530134,
            "unit": "ns",
            "range": "± 13435.861329793504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1962645.9596354167,
            "unit": "ns",
            "range": "± 11272.880869389177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 641009.3565984988,
            "unit": "ns",
            "range": "± 25305.12190507609"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570173.7417689732,
            "unit": "ns",
            "range": "± 3805.6988292820347"
          }
        ]
      }
    ]
  }
}