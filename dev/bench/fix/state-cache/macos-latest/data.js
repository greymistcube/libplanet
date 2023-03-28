window.BENCHMARK_DATA = {
  "lastUpdate": 1679963100362,
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
      }
    ]
  }
}