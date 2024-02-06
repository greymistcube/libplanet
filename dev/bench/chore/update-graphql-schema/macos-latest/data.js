window.BENCHMARK_DATA = {
  "lastUpdate": 1707185269163,
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
          "id": "9f60eeef9e4d848990aa140c25ac59840172a624",
          "message": "Updated graphql schema",
          "timestamp": "2024-02-06T01:36:10+09:00",
          "tree_id": "04e35806d84d3c33f6d6c16daeafa124a4123e97",
          "url": "https://github.com/greymistcube/libplanet/commit/9f60eeef9e4d848990aa140c25ac59840172a624"
        },
        "date": 1707152409410,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9610369.48275862,
            "unit": "ns",
            "range": "± 1098448.73629169"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21518818.63157895,
            "unit": "ns",
            "range": "± 1792397.8372500213"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60115278.265957445,
            "unit": "ns",
            "range": "± 7999197.576761457"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114601725.98275863,
            "unit": "ns",
            "range": "± 9656062.190455029"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 256775938.989011,
            "unit": "ns",
            "range": "± 24480076.012854867"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56619.23863636364,
            "unit": "ns",
            "range": "± 9262.143403400572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 379609.7731958763,
            "unit": "ns",
            "range": "± 107550.55828379672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 304831.12941176473,
            "unit": "ns",
            "range": "± 37446.848360547185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 295656.74358974356,
            "unit": "ns",
            "range": "± 23985.08259635933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6145495.857142857,
            "unit": "ns",
            "range": "± 1141524.7634326664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5432963.61,
            "unit": "ns",
            "range": "± 1074934.566923686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28305.98979591837,
            "unit": "ns",
            "range": "± 5982.507739699542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 131843.02,
            "unit": "ns",
            "range": "± 29449.632591551523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 120973.46808510639,
            "unit": "ns",
            "range": "± 27803.06611367802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87204.82608695653,
            "unit": "ns",
            "range": "± 14819.786704585928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5879.239130434783,
            "unit": "ns",
            "range": "± 1028.1583756819518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30075.51030927835,
            "unit": "ns",
            "range": "± 6711.983888437353"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1499117.2303370787,
            "unit": "ns",
            "range": "± 268014.48459571786"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2906197.855555556,
            "unit": "ns",
            "range": "± 305275.1497979649"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2191049.445652174,
            "unit": "ns",
            "range": "± 240977.7756021991"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 28270958.92105263,
            "unit": "ns",
            "range": "± 7148307.918568059"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2916087.682352941,
            "unit": "ns",
            "range": "± 156234.46880838549"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3331173.112359551,
            "unit": "ns",
            "range": "± 317271.92682580656"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5460108.5154639175,
            "unit": "ns",
            "range": "± 1045244.4963715835"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6007080.510204081,
            "unit": "ns",
            "range": "± 1207329.097122736"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 33485280.86842105,
            "unit": "ns",
            "range": "± 5243040.856516068"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5804819.912109375,
            "unit": "ns",
            "range": "± 848635.2678838306"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1448605.789341518,
            "unit": "ns",
            "range": "± 75230.85839740733"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 898169.0486653646,
            "unit": "ns",
            "range": "± 5493.45809354185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1993379.425998264,
            "unit": "ns",
            "range": "± 39630.26319716347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 750103.4264119467,
            "unit": "ns",
            "range": "± 29070.198953515126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 624783.4531954735,
            "unit": "ns",
            "range": "± 49109.36704526539"
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
          "id": "09bea08b8ced82d4bdf0d79ba8057ed59b2f4b3e",
          "message": "Changelog",
          "timestamp": "2024-02-06T01:41:57+09:00",
          "tree_id": "93d7af9b7f4b535356bfb463ce92adf87db6d382",
          "url": "https://github.com/greymistcube/libplanet/commit/09bea08b8ced82d4bdf0d79ba8057ed59b2f4b3e"
        },
        "date": 1707152657854,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8369151.1875,
            "unit": "ns",
            "range": "± 158104.59623140574"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19652826.852941178,
            "unit": "ns",
            "range": "± 721378.7347373313"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58766822.22105263,
            "unit": "ns",
            "range": "± 9993264.291662212"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138675126.5,
            "unit": "ns",
            "range": "± 17548901.637352277"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219125450.87078652,
            "unit": "ns",
            "range": "± 15397887.858737232"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53450.942528735635,
            "unit": "ns",
            "range": "± 9020.083568885708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 255555.62790697673,
            "unit": "ns",
            "range": "± 17294.413441949815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 242387.1075268817,
            "unit": "ns",
            "range": "± 26466.974842927146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 244116.26966292135,
            "unit": "ns",
            "range": "± 16452.779489388886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4132920.6666666665,
            "unit": "ns",
            "range": "± 168656.05247453306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3724765.2666666666,
            "unit": "ns",
            "range": "± 67863.50409089732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18885.680412371134,
            "unit": "ns",
            "range": "± 4869.325215371205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100176.19565217392,
            "unit": "ns",
            "range": "± 16293.396852537126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76375.8762886598,
            "unit": "ns",
            "range": "± 14908.364949373314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91774.52083333333,
            "unit": "ns",
            "range": "± 18804.315527631396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6612.709677419355,
            "unit": "ns",
            "range": "± 1707.9373561763678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17636.56842105263,
            "unit": "ns",
            "range": "± 5792.921474124705"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1074999.042105263,
            "unit": "ns",
            "range": "± 62619.19683460476"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2371361.6785714286,
            "unit": "ns",
            "range": "± 141459.24362052348"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1976408.9010989012,
            "unit": "ns",
            "range": "± 190499.56677349718"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 20854754.346153848,
            "unit": "ns",
            "range": "± 3621089.9992628517"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3073963.8958333335,
            "unit": "ns",
            "range": "± 120348.0187398444"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3783768.352631579,
            "unit": "ns",
            "range": "± 769610.2542262208"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3660055.7333333334,
            "unit": "ns",
            "range": "± 108506.00423484705"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3815074.9534883723,
            "unit": "ns",
            "range": "± 204608.14947599702"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24396713.978947368,
            "unit": "ns",
            "range": "± 3965464.102140133"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6504896.584971438,
            "unit": "ns",
            "range": "± 1070017.165274187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2135343.8190714517,
            "unit": "ns",
            "range": "± 353277.6622676221"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1439502.8919921876,
            "unit": "ns",
            "range": "± 257150.42953220682"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2832040.3907047193,
            "unit": "ns",
            "range": "± 501851.03729170864"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 676484.4223356427,
            "unit": "ns",
            "range": "± 27774.267049606016"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 602993.5690354567,
            "unit": "ns",
            "range": "± 4222.822396624186"
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
          "id": "760f5dd2116e520dc240acf0d5e8874848263403",
          "message": "Changelog",
          "timestamp": "2024-02-06T10:24:44+09:00",
          "tree_id": "f0e5de52ed83706efda65e4dad0641b337fb76e0",
          "url": "https://github.com/greymistcube/libplanet/commit/760f5dd2116e520dc240acf0d5e8874848263403"
        },
        "date": 1707184312876,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 14204570.180851065,
            "unit": "ns",
            "range": "± 2375925.521063879"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 30709811.71,
            "unit": "ns",
            "range": "± 6079020.987386998"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 77798887.2,
            "unit": "ns",
            "range": "± 9883561.251222854"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 154718313.2263158,
            "unit": "ns",
            "range": "± 17811634.91417479"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 295362719.91935486,
            "unit": "ns",
            "range": "± 25978328.629112247"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75466.84736842105,
            "unit": "ns",
            "range": "± 17224.30196082343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 404012.07,
            "unit": "ns",
            "range": "± 100952.20596038393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 397446.56701030926,
            "unit": "ns",
            "range": "± 110192.28067563567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 393593.0353535354,
            "unit": "ns",
            "range": "± 84913.00493630239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6436645.785714285,
            "unit": "ns",
            "range": "± 1558527.41850824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4504896.847826087,
            "unit": "ns",
            "range": "± 110935.59344691393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28482.96875,
            "unit": "ns",
            "range": "± 7041.696847617767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 119690.00515463918,
            "unit": "ns",
            "range": "± 24032.40390386302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 112625.05319148937,
            "unit": "ns",
            "range": "± 15090.489118687514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116012.80526315789,
            "unit": "ns",
            "range": "± 20499.896032467903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8447.34375,
            "unit": "ns",
            "range": "± 1178.3758700509873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23562.36170212766,
            "unit": "ns",
            "range": "± 4081.693691259817"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1737711.98989899,
            "unit": "ns",
            "range": "± 484857.0480092822"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3955187.6315789474,
            "unit": "ns",
            "range": "± 968253.7502366853"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2960846.4242424243,
            "unit": "ns",
            "range": "± 779123.5778296295"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 27957631.360215053,
            "unit": "ns",
            "range": "± 6021406.894050652"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4655802.288659794,
            "unit": "ns",
            "range": "± 978341.3184924262"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5464941.918367347,
            "unit": "ns",
            "range": "± 1339209.9014325833"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 6527187.295918368,
            "unit": "ns",
            "range": "± 1375281.0856304786"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6474328.448979592,
            "unit": "ns",
            "range": "± 1517820.337744386"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 37083267.11578947,
            "unit": "ns",
            "range": "± 5459577.865961186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5583500.22036774,
            "unit": "ns",
            "range": "± 638133.1842844683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1596212.1456298828,
            "unit": "ns",
            "range": "± 96403.5519219967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 964219.1749267578,
            "unit": "ns",
            "range": "± 18286.249127836843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2186032.59529903,
            "unit": "ns",
            "range": "± 233754.1748230226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 725254.780105745,
            "unit": "ns",
            "range": "± 66467.67918178233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 594300.4271484375,
            "unit": "ns",
            "range": "± 10448.769649163965"
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
          "id": "ffc833d3ca61e68bd3a00d678337f4bc9ae4239c",
          "message": "Changelog",
          "timestamp": "2024-02-06T10:47:37+09:00",
          "tree_id": "73ebd0ce727580667e70013cc894375f97c0ab4d",
          "url": "https://github.com/greymistcube/libplanet/commit/ffc833d3ca61e68bd3a00d678337f4bc9ae4239c"
        },
        "date": 1707185254622,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8338345.2727272725,
            "unit": "ns",
            "range": "± 307856.7982742054"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23228364.45744681,
            "unit": "ns",
            "range": "± 1750485.1647230068"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54406927.18604651,
            "unit": "ns",
            "range": "± 1786303.5450665161"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116954813.21839081,
            "unit": "ns",
            "range": "± 6393299.544722165"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 250067305.64492753,
            "unit": "ns",
            "range": "± 12065957.784845812"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73324.4367816092,
            "unit": "ns",
            "range": "± 8125.843688147882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 344505.02222222224,
            "unit": "ns",
            "range": "± 32357.71834360382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 331452.3789473684,
            "unit": "ns",
            "range": "± 36045.35983510367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 331436.6976744186,
            "unit": "ns",
            "range": "± 24336.215791101404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4949812.954545454,
            "unit": "ns",
            "range": "± 337204.8188468489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4177478.3645833335,
            "unit": "ns",
            "range": "± 267644.4326012099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25584.41935483871,
            "unit": "ns",
            "range": "± 2487.6248376914837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 112673.96774193548,
            "unit": "ns",
            "range": "± 15127.339679226061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 113218.14117647058,
            "unit": "ns",
            "range": "± 8990.17926903328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117623.61458333333,
            "unit": "ns",
            "range": "± 19438.813868876827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8187.966666666666,
            "unit": "ns",
            "range": "± 996.4616185801492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25752.558139534885,
            "unit": "ns",
            "range": "± 3912.077100180478"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1514282.4315789475,
            "unit": "ns",
            "range": "± 197111.72413939607"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2789158.370786517,
            "unit": "ns",
            "range": "± 155954.33617899634"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2692847.357894737,
            "unit": "ns",
            "range": "± 271292.58307943674"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 35205765.35106383,
            "unit": "ns",
            "range": "± 9765963.134656174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3870646.81443299,
            "unit": "ns",
            "range": "± 417577.40619967016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3911843.574468085,
            "unit": "ns",
            "range": "± 409846.4081328881"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4646680.448453608,
            "unit": "ns",
            "range": "± 410208.8600620718"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4741871.125,
            "unit": "ns",
            "range": "± 340128.0633056738"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 31455083.72,
            "unit": "ns",
            "range": "± 4570906.919022731"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6175699.449766995,
            "unit": "ns",
            "range": "± 268502.91896836204"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1862555.31015625,
            "unit": "ns",
            "range": "± 33751.44677021907"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1110046.0930989583,
            "unit": "ns",
            "range": "± 14446.781521594901"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2613952.9372558594,
            "unit": "ns",
            "range": "± 50031.64797706773"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 823077.601671007,
            "unit": "ns",
            "range": "± 17467.663841382826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 776851.4654296875,
            "unit": "ns",
            "range": "± 13636.436374871828"
          }
        ]
      }
    ]
  }
}