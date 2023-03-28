window.BENCHMARK_DATA = {
  "lastUpdate": 1679968800104,
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
          "id": "d3f84965e05ffa4207e70fb116348a48e118200e",
          "message": "Fixed improper cache fetching",
          "timestamp": "2023-03-27T14:48:56+09:00",
          "tree_id": "32e53a21b0e02d9b0181c0b9be199bbd2ccefe6d",
          "url": "https://github.com/greymistcube/libplanet/commit/d3f84965e05ffa4207e70fb116348a48e118200e"
        },
        "date": 1679897050291,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 135782.96315789473,
            "unit": "ns",
            "range": "± 10570.167908457743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 117467.97422680413,
            "unit": "ns",
            "range": "± 21227.01497556278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 231834.0652173913,
            "unit": "ns",
            "range": "± 27866.483234592626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 221556.06451612903,
            "unit": "ns",
            "range": "± 15623.114488535226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3695216.472222222,
            "unit": "ns",
            "range": "± 109889.98925925513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10566512.466666667,
            "unit": "ns",
            "range": "± 161671.41441952417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21119.47894736842,
            "unit": "ns",
            "range": "± 3680.392590006308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68118.44565217392,
            "unit": "ns",
            "range": "± 13131.867015192705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61741.6686746988,
            "unit": "ns",
            "range": "± 3705.0637920161644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 138129.72448979592,
            "unit": "ns",
            "range": "± 27085.052779582988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7937.715909090909,
            "unit": "ns",
            "range": "± 680.7190324379817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23583.144329896906,
            "unit": "ns",
            "range": "± 5891.553654013392"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5222321.582386363,
            "unit": "ns",
            "range": "± 191995.59660803454"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6562308.94117647,
            "unit": "ns",
            "range": "± 131364.78397932157"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27627690.333333332,
            "unit": "ns",
            "range": "± 489947.7125604712"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7029144.50617284,
            "unit": "ns",
            "range": "± 440941.258950473"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 31874844.5,
            "unit": "ns",
            "range": "± 1327369.2355287361"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7472049.4228515625,
            "unit": "ns",
            "range": "± 138558.15357387008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2128432.3951322115,
            "unit": "ns",
            "range": "± 34961.104980211945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1318291.6965332031,
            "unit": "ns",
            "range": "± 25788.74789614535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2560323.848858173,
            "unit": "ns",
            "range": "± 37419.82047210981"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 892209.191545759,
            "unit": "ns",
            "range": "± 11036.08442849923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 742125.9407301683,
            "unit": "ns",
            "range": "± 8335.565521379203"
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
          "id": "2f8a60c05e7b3fc510f23b380297522d9535e538",
          "message": "Fix concurrency problem",
          "timestamp": "2023-03-28T08:58:51+09:00",
          "tree_id": "8572d562fabed0e96ae33533976c9ed38c8f00f6",
          "url": "https://github.com/greymistcube/libplanet/commit/2f8a60c05e7b3fc510f23b380297522d9535e538"
        },
        "date": 1679962538472,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 137794.75824175825,
            "unit": "ns",
            "range": "± 11905.549505579002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 112710.10416666667,
            "unit": "ns",
            "range": "± 17068.88967404806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 248311.46774193548,
            "unit": "ns",
            "range": "± 23373.12546561877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 222376.95263157896,
            "unit": "ns",
            "range": "± 18349.73953596143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3521118.0384615385,
            "unit": "ns",
            "range": "± 93420.43736591293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9603668.38235294,
            "unit": "ns",
            "range": "± 279507.3159205172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22830.697916666668,
            "unit": "ns",
            "range": "± 2996.580224960979"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57928.46875,
            "unit": "ns",
            "range": "± 10714.216864033482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 57290.5404040404,
            "unit": "ns",
            "range": "± 10194.576862553644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 132215.52083333334,
            "unit": "ns",
            "range": "± 15464.636743894573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8084.652631578947,
            "unit": "ns",
            "range": "± 1209.506676016345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20314.724489795917,
            "unit": "ns",
            "range": "± 3191.529975279162"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5379429.462265625,
            "unit": "ns",
            "range": "± 420824.9059640807"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6329010.357142857,
            "unit": "ns",
            "range": "± 100104.71555238633"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 28941371.223404255,
            "unit": "ns",
            "range": "± 1977112.9406108954"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8021982.483146068,
            "unit": "ns",
            "range": "± 2046213.2954260795"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 32371333.020833332,
            "unit": "ns",
            "range": "± 1880318.4235873455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6531966.913306451,
            "unit": "ns",
            "range": "± 198748.57174736954"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1960970.5423828126,
            "unit": "ns",
            "range": "± 44797.33959743298"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1291153.7112458881,
            "unit": "ns",
            "range": "± 28520.16524516409"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2440399.1018415177,
            "unit": "ns",
            "range": "± 25263.68101017151"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 782761.6293402778,
            "unit": "ns",
            "range": "± 13661.693774091067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 711060.5285373264,
            "unit": "ns",
            "range": "± 14410.393734160787"
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
          "id": "b8c0e711e2feb42e0acde7dffcc6b269f962493e",
          "message": "Cleanup",
          "timestamp": "2023-03-28T09:07:31+09:00",
          "tree_id": "1e8c807b6f2c966f7069feb76d4545506195a22b",
          "url": "https://github.com/greymistcube/libplanet/commit/b8c0e711e2feb42e0acde7dffcc6b269f962493e"
        },
        "date": 1679963081025,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 134136.73913043478,
            "unit": "ns",
            "range": "± 9416.728121466438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109364.01546391753,
            "unit": "ns",
            "range": "± 20179.917166741026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 216696.74489795917,
            "unit": "ns",
            "range": "± 24795.230697172483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 205301.67894736843,
            "unit": "ns",
            "range": "± 19398.31303697317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3630829.476190476,
            "unit": "ns",
            "range": "± 83582.29498202298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9810011.875,
            "unit": "ns",
            "range": "± 154448.3395498853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18323.655913978495,
            "unit": "ns",
            "range": "± 2153.9725811434805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51367.22580645161,
            "unit": "ns",
            "range": "± 5351.687062585827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 57976.683673469386,
            "unit": "ns",
            "range": "± 5023.421127238524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121992.63265306123,
            "unit": "ns",
            "range": "± 23271.89757574651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7154.802083333333,
            "unit": "ns",
            "range": "± 901.3296916490914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19841.314606741573,
            "unit": "ns",
            "range": "± 2484.880208359722"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5161532.9886067705,
            "unit": "ns",
            "range": "± 527443.3417058655"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6471275.333333333,
            "unit": "ns",
            "range": "± 133046.78806212143"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27561645.813333333,
            "unit": "ns",
            "range": "± 1390105.9842395035"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7309821.5,
            "unit": "ns",
            "range": "± 666651.0901927766"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 32342959.7,
            "unit": "ns",
            "range": "± 1688129.9770246889"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6589004.275841346,
            "unit": "ns",
            "range": "± 37227.12424609508"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1889664.689174107,
            "unit": "ns",
            "range": "± 24634.477996621885"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1302136.8436104911,
            "unit": "ns",
            "range": "± 21060.95376778257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2783226.4730154453,
            "unit": "ns",
            "range": "± 149785.1680863447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 792024.0487738715,
            "unit": "ns",
            "range": "± 16029.303578014837"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 721525.4597516741,
            "unit": "ns",
            "range": "± 7002.115234914106"
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
          "id": "3e7edb6447107f08b34c883d7696c6d9b0166b21",
          "message": "Higher depth",
          "timestamp": "2023-03-28T09:31:23+09:00",
          "tree_id": "1b9ace8cc9e53989f79a8993abbf9e304d431720",
          "url": "https://github.com/greymistcube/libplanet/commit/3e7edb6447107f08b34c883d7696c6d9b0166b21"
        },
        "date": 1679964734230,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 149710.311827957,
            "unit": "ns",
            "range": "± 12105.329741552127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 153775.02197802198,
            "unit": "ns",
            "range": "± 26661.65304076584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 273188.32558139536,
            "unit": "ns",
            "range": "± 28935.9106820337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 226813.60416666666,
            "unit": "ns",
            "range": "± 27284.853816716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3793353.4615384615,
            "unit": "ns",
            "range": "± 52925.90925941563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11192852.825,
            "unit": "ns",
            "range": "± 394816.15006730484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24043.93010752688,
            "unit": "ns",
            "range": "± 5541.394174750002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80743.77173913043,
            "unit": "ns",
            "range": "± 19697.780986255515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70933.03488372093,
            "unit": "ns",
            "range": "± 5061.864405294984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 141453.4,
            "unit": "ns",
            "range": "± 26577.412559732238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10177.564516129032,
            "unit": "ns",
            "range": "± 2298.3323481926955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20714.46875,
            "unit": "ns",
            "range": "± 4558.640284242487"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5658388.585769489,
            "unit": "ns",
            "range": "± 469613.9505401388"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6636931.12371134,
            "unit": "ns",
            "range": "± 518370.8990419178"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 32433660.37912088,
            "unit": "ns",
            "range": "± 3471797.0280687287"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 11765987.357142856,
            "unit": "ns",
            "range": "± 3032067.3791554268"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 35142811.889473684,
            "unit": "ns",
            "range": "± 2755122.5698566437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7962247.942950581,
            "unit": "ns",
            "range": "± 293765.4569401957"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2268182.036732456,
            "unit": "ns",
            "range": "± 88651.85747335554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1422522.7357855903,
            "unit": "ns",
            "range": "± 28060.562558575828"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3108425.804750504,
            "unit": "ns",
            "range": "± 141390.66244526402"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 983381.8608723958,
            "unit": "ns",
            "range": "± 28532.958338005035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 798878.2747667101,
            "unit": "ns",
            "range": "± 26042.43643333109"
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
          "id": "eeae46d1711f813b88ccbfdc00135da9bfa71472",
          "message": "Lower depth limit",
          "timestamp": "2023-03-28T09:56:48+09:00",
          "tree_id": "67520f504c2bbeb5e69672bba5c71fc989ad1a4f",
          "url": "https://github.com/greymistcube/libplanet/commit/eeae46d1711f813b88ccbfdc00135da9bfa71472"
        },
        "date": 1679966081442,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 135534.21875,
            "unit": "ns",
            "range": "± 10794.21905778432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 134683.68,
            "unit": "ns",
            "range": "± 26695.720396961147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 247640.0052631579,
            "unit": "ns",
            "range": "± 30650.281085752056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231603.125,
            "unit": "ns",
            "range": "± 27654.31230339464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3859019.3780487804,
            "unit": "ns",
            "range": "± 231459.96731533206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11092311.534090908,
            "unit": "ns",
            "range": "± 607866.177368295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22249.9793814433,
            "unit": "ns",
            "range": "± 4337.843314893987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61401.27319587629,
            "unit": "ns",
            "range": "± 8559.230055064769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59444.70212765958,
            "unit": "ns",
            "range": "± 5090.124093444293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124690.10309278351,
            "unit": "ns",
            "range": "± 34591.44042560859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8201.255102040815,
            "unit": "ns",
            "range": "± 1462.9090374243456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19903.96,
            "unit": "ns",
            "range": "± 3620.54709555215"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5428995.093666888,
            "unit": "ns",
            "range": "± 339718.4031375351"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6925466.166666667,
            "unit": "ns",
            "range": "± 648817.8747023683"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29288253.603448275,
            "unit": "ns",
            "range": "± 1589610.4942765874"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7428286.898989899,
            "unit": "ns",
            "range": "± 818837.2451969965"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 32251799.35714286,
            "unit": "ns",
            "range": "± 1322627.971543396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6666343.480202415,
            "unit": "ns",
            "range": "± 366336.499090169"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2034124.8765024038,
            "unit": "ns",
            "range": "± 20627.38921778838"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1326807.5143694195,
            "unit": "ns",
            "range": "± 21822.248522592443"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2717554.388774671,
            "unit": "ns",
            "range": "± 58793.02570579709"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 803596.192578125,
            "unit": "ns",
            "range": "± 10278.182725154331"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 722240.0451660156,
            "unit": "ns",
            "range": "± 2036.1223038847154"
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
          "id": "a995698cfccba9b723e04e181f79b340b6e24fe9",
          "message": "Reduce cache depth",
          "timestamp": "2023-03-28T10:41:31+09:00",
          "tree_id": "31e72eed8e972748a282d9a2807e6ee719fcda1d",
          "url": "https://github.com/greymistcube/libplanet/commit/a995698cfccba9b723e04e181f79b340b6e24fe9"
        },
        "date": 1679968786607,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 135340.93157894738,
            "unit": "ns",
            "range": "± 8564.56120108189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 132317.2816091954,
            "unit": "ns",
            "range": "± 21936.218046781374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 253068.193877551,
            "unit": "ns",
            "range": "± 33429.8659388402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 210553.00537634408,
            "unit": "ns",
            "range": "± 15362.892652231627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3640658.4,
            "unit": "ns",
            "range": "± 40793.293011054084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10219261.471428571,
            "unit": "ns",
            "range": "± 328824.21584161365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19093.393617021276,
            "unit": "ns",
            "range": "± 3072.555222626251"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55181.427083333336,
            "unit": "ns",
            "range": "± 10718.074006820436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61362.552083333336,
            "unit": "ns",
            "range": "± 8289.207712593645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 126505.97959183673,
            "unit": "ns",
            "range": "± 18330.154897225504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8325.677083333334,
            "unit": "ns",
            "range": "± 633.5268447731678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21234.46907216495,
            "unit": "ns",
            "range": "± 3680.031353052603"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5247137.254065689,
            "unit": "ns",
            "range": "± 411553.5022067491"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6496795.445054945,
            "unit": "ns",
            "range": "± 641886.5843728222"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27310163.814285714,
            "unit": "ns",
            "range": "± 893358.0979116273"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7001274.807692308,
            "unit": "ns",
            "range": "± 364948.51583792514"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 33210778.3880597,
            "unit": "ns",
            "range": "± 1569131.4311072628"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6570831.990131579,
            "unit": "ns",
            "range": "± 137559.550291141"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1904384.1847098214,
            "unit": "ns",
            "range": "± 12862.949109500556"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1413190.9361860796,
            "unit": "ns",
            "range": "± 59677.14794091708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3082849.47015625,
            "unit": "ns",
            "range": "± 301813.37962367065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 847270.200796274,
            "unit": "ns",
            "range": "± 12755.707528417313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 797895.8031850961,
            "unit": "ns",
            "range": "± 11775.810480587154"
          }
        ]
      }
    ]
  }
}