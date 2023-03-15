window.BENCHMARK_DATA = {
  "lastUpdate": 1678843180474,
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
          "id": "c9cc9b9eef3ad9691dc1279e852e3b4f39e6de39",
          "message": "Port 0.50.3 to 0.51.2",
          "timestamp": "2023-03-14T19:16:46+09:00",
          "tree_id": "e520cb9ddb43668a02f62c28849c7c9ab8719ac1",
          "url": "https://github.com/greymistcube/libplanet/commit/c9cc9b9eef3ad9691dc1279e852e3b4f39e6de39"
        },
        "date": 1678789932692,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7759593.214285715,
            "unit": "ns",
            "range": "± 84420.22994194311"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 18517537.07142857,
            "unit": "ns",
            "range": "± 323064.9622204998"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 47691884.114285715,
            "unit": "ns",
            "range": "± 1558650.2079300156"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 91865706.15384616,
            "unit": "ns",
            "range": "± 871704.1085933198"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 191930537.14285713,
            "unit": "ns",
            "range": "± 2556500.054215223"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55385.72631578947,
            "unit": "ns",
            "range": "± 5850.570496717913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 197901.688172043,
            "unit": "ns",
            "range": "± 12622.25683498114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192810.88202247192,
            "unit": "ns",
            "range": "± 11058.887834006078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172962.02105263158,
            "unit": "ns",
            "range": "± 13899.459818050293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11681077.357142856,
            "unit": "ns",
            "range": "± 192736.81948613728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9417615.28125,
            "unit": "ns",
            "range": "± 280796.346718519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17027.022222222222,
            "unit": "ns",
            "range": "± 2131.44831794836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50194.52127659575,
            "unit": "ns",
            "range": "± 6450.080147420231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48671.91836734694,
            "unit": "ns",
            "range": "± 5613.679807662541"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105484.3829787234,
            "unit": "ns",
            "range": "± 15805.227908815476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5569.782608695652,
            "unit": "ns",
            "range": "± 599.11694772962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16300.068965517241,
            "unit": "ns",
            "range": "± 1848.533641320987"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1493967.0860215053,
            "unit": "ns",
            "range": "± 150468.85999692802"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2792582.7395833335,
            "unit": "ns",
            "range": "± 179299.63822858062"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2374087.12371134,
            "unit": "ns",
            "range": "± 214937.92677103393"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6101569.405405405,
            "unit": "ns",
            "range": "± 304358.5617088457"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3148523.447368421,
            "unit": "ns",
            "range": "± 108063.69291576032"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4896042.0930232555,
            "unit": "ns",
            "range": "± 266228.7127439655"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 22295228.833333332,
            "unit": "ns",
            "range": "± 511279.1684464891"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6034600.014285714,
            "unit": "ns",
            "range": "± 291361.94685392093"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26725733.756410256,
            "unit": "ns",
            "range": "± 926786.7342717191"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6148741.805803572,
            "unit": "ns",
            "range": "± 30603.958329389974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1785785.4935825893,
            "unit": "ns",
            "range": "± 11644.69045756114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1300175.5155101102,
            "unit": "ns",
            "range": "± 26303.812379285104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2683637.53125,
            "unit": "ns",
            "range": "± 22348.482315717614"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 873051.8090122768,
            "unit": "ns",
            "range": "± 19903.73660535397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 701552.7935546875,
            "unit": "ns",
            "range": "± 9261.118236399707"
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
          "id": "17498ea0633120215dc070704dc36a44751c9944",
          "message": "Port 0.50.3 to 0.51.3",
          "timestamp": "2023-03-14T19:16:05+09:00",
          "tree_id": "e520cb9ddb43668a02f62c28849c7c9ab8719ac1",
          "url": "https://github.com/greymistcube/libplanet/commit/17498ea0633120215dc070704dc36a44751c9944"
        },
        "date": 1678790114937,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8672510.642857144,
            "unit": "ns",
            "range": "± 418739.28835989727"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 21436263.290697675,
            "unit": "ns",
            "range": "± 778407.8738934749"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 52034739.4,
            "unit": "ns",
            "range": "± 1157526.4210405922"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 103666796.96153846,
            "unit": "ns",
            "range": "± 1289443.6035165591"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 200199724.92857143,
            "unit": "ns",
            "range": "± 1267949.0675324986"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73183.39325842696,
            "unit": "ns",
            "range": "± 9661.868974594241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 225162.60869565216,
            "unit": "ns",
            "range": "± 23385.491974494664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 227716.95833333334,
            "unit": "ns",
            "range": "± 28729.08777525394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 220716.17368421052,
            "unit": "ns",
            "range": "± 25770.865283007835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12871286.458333334,
            "unit": "ns",
            "range": "± 807645.2618244165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10232696.92982456,
            "unit": "ns",
            "range": "± 439557.28759651934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20836.01052631579,
            "unit": "ns",
            "range": "± 3085.1666167452786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56783.18279569892,
            "unit": "ns",
            "range": "± 8574.518829124183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55241.55319148936,
            "unit": "ns",
            "range": "± 6093.694113487577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127350.3125,
            "unit": "ns",
            "range": "± 18623.809095553777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7269.694736842105,
            "unit": "ns",
            "range": "± 935.0350667412608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23748.621052631577,
            "unit": "ns",
            "range": "± 4729.472432858562"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1776356.4270833333,
            "unit": "ns",
            "range": "± 219202.89790603853"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2987731.935483871,
            "unit": "ns",
            "range": "± 169158.45707988698"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2718061.5,
            "unit": "ns",
            "range": "± 337403.0728946822"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6240035.03030303,
            "unit": "ns",
            "range": "± 259480.19984803462"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3255250.6219512196,
            "unit": "ns",
            "range": "± 93038.30828647819"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5036004.157894737,
            "unit": "ns",
            "range": "± 85530.2081991199"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23976536.38235294,
            "unit": "ns",
            "range": "± 766513.5093632891"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6475137.1823529415,
            "unit": "ns",
            "range": "± 349892.2032786606"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27895931.155172415,
            "unit": "ns",
            "range": "± 797790.4432115381"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6828762.711079545,
            "unit": "ns",
            "range": "± 264942.37685120467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2241970.030517578,
            "unit": "ns",
            "range": "± 42853.94295702498"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1351414.8172743055,
            "unit": "ns",
            "range": "± 28901.89306647195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2850566.6169882016,
            "unit": "ns",
            "range": "± 197524.11515693195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 889629.8343331473,
            "unit": "ns",
            "range": "± 12754.970971848099"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 815291.0518015391,
            "unit": "ns",
            "range": "± 38388.417321202556"
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
          "id": "427645e8deccade6832f99e7a9bac7a38e41d479",
          "message": "Changelog",
          "timestamp": "2023-03-14T19:19:39+09:00",
          "tree_id": "4dab05484c1d09894134fb208a9f267ecf913aae",
          "url": "https://github.com/greymistcube/libplanet/commit/427645e8deccade6832f99e7a9bac7a38e41d479"
        },
        "date": 1678790197719,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8071199.1,
            "unit": "ns",
            "range": "± 97777.7447580554"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20455338.71212121,
            "unit": "ns",
            "range": "± 962407.6038638606"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 52717333.01388889,
            "unit": "ns",
            "range": "± 2206566.3056485443"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 104401191.98461539,
            "unit": "ns",
            "range": "± 4810074.877135492"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 206966954.86363637,
            "unit": "ns",
            "range": "± 5032810.597127256"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63994.45744680851,
            "unit": "ns",
            "range": "± 11307.313754242405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 218998.05263157896,
            "unit": "ns",
            "range": "± 28484.716854186172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 210611.585106383,
            "unit": "ns",
            "range": "± 19792.29680793867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 208711.48888888888,
            "unit": "ns",
            "range": "± 21518.511958543684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12180051.480519481,
            "unit": "ns",
            "range": "± 618017.5791505835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9531264.6,
            "unit": "ns",
            "range": "± 428123.7713404445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17720.68888888889,
            "unit": "ns",
            "range": "± 2278.3974885005237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55376.0404040404,
            "unit": "ns",
            "range": "± 8198.644994964283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53625.5412371134,
            "unit": "ns",
            "range": "± 7078.02188396931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110925.45555555556,
            "unit": "ns",
            "range": "± 13734.613173105983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6898.648936170212,
            "unit": "ns",
            "range": "± 1258.027930245758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18675.629032258064,
            "unit": "ns",
            "range": "± 3097.9897557364466"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1574003.4081632653,
            "unit": "ns",
            "range": "± 133418.85604691625"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2947525.6770833335,
            "unit": "ns",
            "range": "± 190433.25463824766"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2590379.3516483516,
            "unit": "ns",
            "range": "± 257332.70436936835"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6354086.238636363,
            "unit": "ns",
            "range": "± 417179.8262907596"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3518700.0412371135,
            "unit": "ns",
            "range": "± 287390.9627285813"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5210588.086206896,
            "unit": "ns",
            "range": "± 286352.9681003382"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25064394.77536232,
            "unit": "ns",
            "range": "± 1199393.9817286022"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6623148.364583333,
            "unit": "ns",
            "range": "± 531335.7377215737"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 31142454.675324675,
            "unit": "ns",
            "range": "± 1588971.476362821"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6431140.6953125,
            "unit": "ns",
            "range": "± 74082.7932548889"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1827476.1586538462,
            "unit": "ns",
            "range": "± 19947.38680492721"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1233193.4705528845,
            "unit": "ns",
            "range": "± 7855.315816108049"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2393068.2728365385,
            "unit": "ns",
            "range": "± 24817.53791085962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 774024.2493722098,
            "unit": "ns",
            "range": "± 11202.294307686783"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755457.6263671875,
            "unit": "ns",
            "range": "± 11987.039294864204"
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
          "id": "c7bac12ae53cdacb07173b6595f8b42174ebd2b7",
          "message": "Fixed tests",
          "timestamp": "2023-03-15T09:59:16+09:00",
          "tree_id": "4283086a07662080e9bc8e33e4880b769f6ad26d",
          "url": "https://github.com/greymistcube/libplanet/commit/c7bac12ae53cdacb07173b6595f8b42174ebd2b7"
        },
        "date": 1678843160313,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 9140508.961538462,
            "unit": "ns",
            "range": "± 104714.25470903773"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 23748271.348484848,
            "unit": "ns",
            "range": "± 739144.4351683795"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 54797659.766666666,
            "unit": "ns",
            "range": "± 2041360.1990446043"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 114120609.13333334,
            "unit": "ns",
            "range": "± 1407569.528922404"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 233481895.91666666,
            "unit": "ns",
            "range": "± 5931172.3719046945"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70111.57142857143,
            "unit": "ns",
            "range": "± 6651.3824263045035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 225013.55208333334,
            "unit": "ns",
            "range": "± 22859.087776784363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 235565.98780487804,
            "unit": "ns",
            "range": "± 12503.069005217567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 206230.96739130435,
            "unit": "ns",
            "range": "± 14087.753573837339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12927865.304347826,
            "unit": "ns",
            "range": "± 321530.63882967876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10640657.933333334,
            "unit": "ns",
            "range": "± 156648.50545202268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20338.413978494624,
            "unit": "ns",
            "range": "± 2190.467880613211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60566.4375,
            "unit": "ns",
            "range": "± 10837.288792636284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45283.11627906977,
            "unit": "ns",
            "range": "± 4827.161421809143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99779.47727272728,
            "unit": "ns",
            "range": "± 16595.413660141214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5769.505154639175,
            "unit": "ns",
            "range": "± 556.1000570137112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19039.347826086956,
            "unit": "ns",
            "range": "± 1949.235575356909"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1717791.975609756,
            "unit": "ns",
            "range": "± 143800.97968029196"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3102474.561797753,
            "unit": "ns",
            "range": "± 232322.66579381452"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2907504.631868132,
            "unit": "ns",
            "range": "± 394119.79032579553"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6918385.510989011,
            "unit": "ns",
            "range": "± 435635.17899036413"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3808344.1585365855,
            "unit": "ns",
            "range": "± 135182.97211661123"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6110141.945945946,
            "unit": "ns",
            "range": "± 201222.58050366156"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26923308.192307692,
            "unit": "ns",
            "range": "± 342641.672650984"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7470304.396825396,
            "unit": "ns",
            "range": "± 342902.9259340232"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 31276941.893617023,
            "unit": "ns",
            "range": "± 1779024.1868802744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7274515.385044643,
            "unit": "ns",
            "range": "± 55317.247073476916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2234979.5225360575,
            "unit": "ns",
            "range": "± 8920.562586598595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1506157.3583984375,
            "unit": "ns",
            "range": "± 18216.145051417356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3158619.1923076925,
            "unit": "ns",
            "range": "± 25458.51709610567"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 956750.21875,
            "unit": "ns",
            "range": "± 11791.448284747328"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 832621.084375,
            "unit": "ns",
            "range": "± 13071.367285776436"
          }
        ]
      }
    ]
  }
}