window.BENCHMARK_DATA = {
  "lastUpdate": 1696351509284,
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
          "id": "1e1e0e68367e7006a93ab97437129933f338c9f5",
          "message": "Remove unnecessary copy methods",
          "timestamp": "2023-09-27T09:58:56+09:00",
          "tree_id": "c9eed7988ffb1c411dc9f49c109ffa4787b995d0",
          "url": "https://github.com/greymistcube/libplanet/commit/1e1e0e68367e7006a93ab97437129933f338c9f5"
        },
        "date": 1696351034471,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10125776.042105263,
            "unit": "ns",
            "range": "± 977444.5055833736"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23037540.663265307,
            "unit": "ns",
            "range": "± 1477411.0442976994"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56276587.38888889,
            "unit": "ns",
            "range": "± 2290285.355353637"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114427077.70454545,
            "unit": "ns",
            "range": "± 4237158.732262121"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235051578.34,
            "unit": "ns",
            "range": "± 11878761.252125708"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68947.51136363637,
            "unit": "ns",
            "range": "± 10567.12320924714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 336270.329787234,
            "unit": "ns",
            "range": "± 35597.12457470189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 331105.9382022472,
            "unit": "ns",
            "range": "± 41663.65084872464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 303749.36842105264,
            "unit": "ns",
            "range": "± 10376.502085783684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4255559.550561798,
            "unit": "ns",
            "range": "± 249433.32078178236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3654847.7333333334,
            "unit": "ns",
            "range": "± 56402.28840021433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21532.525773195877,
            "unit": "ns",
            "range": "± 3116.8464801943096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97307.62637362638,
            "unit": "ns",
            "range": "± 8664.373829588165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104299.80927835051,
            "unit": "ns",
            "range": "± 8892.221772379717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88636.76530612246,
            "unit": "ns",
            "range": "± 22340.366166415126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5458.904255319149,
            "unit": "ns",
            "range": "± 1432.5623337910122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18570.31914893617,
            "unit": "ns",
            "range": "± 2741.673227286719"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1580971.4591836734,
            "unit": "ns",
            "range": "± 190205.26319053257"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2986947.511627907,
            "unit": "ns",
            "range": "± 161677.25774164617"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2335282.0425531915,
            "unit": "ns",
            "range": "± 186857.30218624248"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10622995.487179488,
            "unit": "ns",
            "range": "± 655273.0287666008"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3593964.21875,
            "unit": "ns",
            "range": "± 332227.67069168895"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3869409.873737374,
            "unit": "ns",
            "range": "± 430258.078999427"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5080814.315217392,
            "unit": "ns",
            "range": "± 669650.0158403547"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4802804.173469388,
            "unit": "ns",
            "range": "± 481070.92763371865"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16282467.053191489,
            "unit": "ns",
            "range": "± 1780655.7057410504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5497231.632711039,
            "unit": "ns",
            "range": "± 279713.71327114647"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1603336.5317007212,
            "unit": "ns",
            "range": "± 10810.508268865415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 988919.6944010417,
            "unit": "ns",
            "range": "± 15504.407524268781"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2486737.5149075254,
            "unit": "ns",
            "range": "± 98295.6077740764"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 773118.8607421875,
            "unit": "ns",
            "range": "± 6905.248505636254"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 702425.238671875,
            "unit": "ns",
            "range": "± 4621.947271836508"
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
          "id": "c1fbdebb46491be08525e53e477c54646523879b",
          "message": "Changelog",
          "timestamp": "2023-10-04T01:21:13+09:00",
          "tree_id": "9d35c50be44a97f971bfd0a2d52bc4286d23a071",
          "url": "https://github.com/greymistcube/libplanet/commit/c1fbdebb46491be08525e53e477c54646523879b"
        },
        "date": 1696351271083,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8406526.628571428,
            "unit": "ns",
            "range": "± 407134.92710328393"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21469194.954545453,
            "unit": "ns",
            "range": "± 794839.2576505995"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51244419.6,
            "unit": "ns",
            "range": "± 1788532.044642539"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112874246.16666667,
            "unit": "ns",
            "range": "± 2926613.0053829425"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 239470159.84,
            "unit": "ns",
            "range": "± 6373501.909975053"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67357.77659574468,
            "unit": "ns",
            "range": "± 10473.752558364884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 343776.3829787234,
            "unit": "ns",
            "range": "± 35045.859018832445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 333617.9090909091,
            "unit": "ns",
            "range": "± 32433.790585063874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 336551.9431818182,
            "unit": "ns",
            "range": "± 22110.563742693746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4179150.7303370787,
            "unit": "ns",
            "range": "± 223031.68845723593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4051639,
            "unit": "ns",
            "range": "± 204856.53442607902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25746.355555555554,
            "unit": "ns",
            "range": "± 3880.6875196244273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 122084.60112359551,
            "unit": "ns",
            "range": "± 19799.275736894186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 113249.12921348315,
            "unit": "ns",
            "range": "± 9020.646753398085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117195.72680412371,
            "unit": "ns",
            "range": "± 21644.84758286655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7254.647368421052,
            "unit": "ns",
            "range": "± 1096.288215020091"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23790.477777777778,
            "unit": "ns",
            "range": "± 3290.2412985784813"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1435284.3723404256,
            "unit": "ns",
            "range": "± 80996.16700767474"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2823902.7156862747,
            "unit": "ns",
            "range": "± 113810.44315691134"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2458320.6701030927,
            "unit": "ns",
            "range": "± 255873.83990348157"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10478130.368421054,
            "unit": "ns",
            "range": "± 680094.1250362304"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3703465.02,
            "unit": "ns",
            "range": "± 376114.55161810544"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3991186.5306122447,
            "unit": "ns",
            "range": "± 447182.33007673133"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4631418.232323232,
            "unit": "ns",
            "range": "± 384478.6764247706"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4676531.081632653,
            "unit": "ns",
            "range": "± 375112.1915922388"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16391201.543010753,
            "unit": "ns",
            "range": "± 2395328.2009478454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6133522.759943182,
            "unit": "ns",
            "range": "± 146018.56254726564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1863845.1559293377,
            "unit": "ns",
            "range": "± 88411.96468195434"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1059619.8962239583,
            "unit": "ns",
            "range": "± 13954.022708037908"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2579346.85539363,
            "unit": "ns",
            "range": "± 105545.4716153453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 794428.8230329241,
            "unit": "ns",
            "range": "± 4365.713754055668"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 817382.8754185268,
            "unit": "ns",
            "range": "± 11981.168151162608"
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
          "id": "abf7c5492ca733759a8198b465c823d6c60ffee2",
          "message": "Changelog",
          "timestamp": "2023-10-04T01:24:11+09:00",
          "tree_id": "4e297305404cfc9980e96eef99e4a093ccf46805",
          "url": "https://github.com/greymistcube/libplanet/commit/abf7c5492ca733759a8198b465c823d6c60ffee2"
        },
        "date": 1696351486539,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11941268.7,
            "unit": "ns",
            "range": "± 2072511.0667563956"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 31923274.286516853,
            "unit": "ns",
            "range": "± 5436425.638635912"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68961300.62886597,
            "unit": "ns",
            "range": "± 11241025.103166597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 132871729.44318181,
            "unit": "ns",
            "range": "± 19071849.519097924"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 264676878.5860215,
            "unit": "ns",
            "range": "± 38759410.42329535"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 78640.75824175825,
            "unit": "ns",
            "range": "± 22162.472898694043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 346392,
            "unit": "ns",
            "range": "± 85738.0564576597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 299574.83684210526,
            "unit": "ns",
            "range": "± 61048.96282904691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 316023.92424242425,
            "unit": "ns",
            "range": "± 78301.45923199004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5101077.170103093,
            "unit": "ns",
            "range": "± 1187579.7799286626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4944985.304347826,
            "unit": "ns",
            "range": "± 1205320.616849462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24938.463157894737,
            "unit": "ns",
            "range": "± 8351.976929701526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111694.08602150538,
            "unit": "ns",
            "range": "± 26076.650029770477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92578.90816326531,
            "unit": "ns",
            "range": "± 17787.69768070446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106817.23529411765,
            "unit": "ns",
            "range": "± 33993.28681261831"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7374.829787234043,
            "unit": "ns",
            "range": "± 1559.4135487026442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19607.360215053763,
            "unit": "ns",
            "range": "± 5130.2575632253"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1392767.3723404256,
            "unit": "ns",
            "range": "± 409792.7478588463"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3054304.095959596,
            "unit": "ns",
            "range": "± 695900.1745686606"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1813617.8823529412,
            "unit": "ns",
            "range": "± 174865.8788643056"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12592137.2,
            "unit": "ns",
            "range": "± 2931711.109723375"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4010813.3673469387,
            "unit": "ns",
            "range": "± 920438.8783819478"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3952052.9494949495,
            "unit": "ns",
            "range": "± 712373.9115310215"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5439829.69072165,
            "unit": "ns",
            "range": "± 1086256.5088552246"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5031558.924242424,
            "unit": "ns",
            "range": "± 1191953.9183462425"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16534334.93478261,
            "unit": "ns",
            "range": "± 3656327.0215663915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5853009.975127551,
            "unit": "ns",
            "range": "± 1007664.8189392203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1333695.4147858797,
            "unit": "ns",
            "range": "± 28108.68024025735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 849019.9909104567,
            "unit": "ns",
            "range": "± 4299.076429205556"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1904976.1067708333,
            "unit": "ns",
            "range": "± 23249.86962418241"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 607003.8768780048,
            "unit": "ns",
            "range": "± 7945.748512398436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 557563.2835693359,
            "unit": "ns",
            "range": "± 10725.07460989582"
          }
        ]
      }
    ]
  }
}