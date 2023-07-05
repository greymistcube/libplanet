window.BENCHMARK_DATA = {
  "lastUpdate": 1688541742104,
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
          "id": "a11fa8c295811e9017e6652a48cb5dbb577ca1c9",
          "message": "Remove early termination for tx evaluation",
          "timestamp": "2023-07-05T14:23:42+09:00",
          "tree_id": "499cc83aa3cb35299f3e9593348bc0dab9f54898",
          "url": "https://github.com/greymistcube/libplanet/commit/a11fa8c295811e9017e6652a48cb5dbb577ca1c9"
        },
        "date": 1688535456635,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8045376.152173913,
            "unit": "ns",
            "range": "± 199810.6336611126"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19605003.875,
            "unit": "ns",
            "range": "± 356559.43851198687"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47759405.733333334,
            "unit": "ns",
            "range": "± 474480.08307085326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96633843.46666667,
            "unit": "ns",
            "range": "± 830297.3094351605"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198927309.7647059,
            "unit": "ns",
            "range": "± 3922914.654349931"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55651.65555555555,
            "unit": "ns",
            "range": "± 4614.619804079719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 309211.597826087,
            "unit": "ns",
            "range": "± 20161.084776468535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 297621.9691358025,
            "unit": "ns",
            "range": "± 14937.542307125374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 277862,
            "unit": "ns",
            "range": "± 17945.00204396463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4086539.1428571427,
            "unit": "ns",
            "range": "± 69076.89988351014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3695861.533333333,
            "unit": "ns",
            "range": "± 43226.68506319194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16293.989583333334,
            "unit": "ns",
            "range": "± 1473.2485944140526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86852.72448979592,
            "unit": "ns",
            "range": "± 10000.884201920288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85199.95555555556,
            "unit": "ns",
            "range": "± 6185.471168070886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106052.53684210527,
            "unit": "ns",
            "range": "± 15762.101106573356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5893.520618556701,
            "unit": "ns",
            "range": "± 1041.6724831109088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16152.182795698925,
            "unit": "ns",
            "range": "± 1947.367509285942"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1616165.6958762887,
            "unit": "ns",
            "range": "± 183015.5222307341"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2911086.0508474577,
            "unit": "ns",
            "range": "± 116355.86449239777"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2080216.2777777778,
            "unit": "ns",
            "range": "± 157564.5005798277"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5790941.836065574,
            "unit": "ns",
            "range": "± 233877.48904267378"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3190960.8305084747,
            "unit": "ns",
            "range": "± 117579.62226261426"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3421264.2073170734,
            "unit": "ns",
            "range": "± 123341.37317811162"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4322847.346153846,
            "unit": "ns",
            "range": "± 170250.18002286812"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3798006.9066666667,
            "unit": "ns",
            "range": "± 190985.22580436745"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6977973.5,
            "unit": "ns",
            "range": "± 215232.17146713255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6450848.2421875,
            "unit": "ns",
            "range": "± 19043.571443935994"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1934189.4744591345,
            "unit": "ns",
            "range": "± 4607.510501235587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1271206.2532552083,
            "unit": "ns",
            "range": "± 8750.659296931746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2487562.094308036,
            "unit": "ns",
            "range": "± 9795.273328985082"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 835175.0502604167,
            "unit": "ns",
            "range": "± 10155.396898729981"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763428.3810686384,
            "unit": "ns",
            "range": "± 3895.004645699233"
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
          "id": "6c3dc5c3571a388ecb2cd52f854ebee6a2d4580d",
          "message": "Remove early termination for tx evaluation",
          "timestamp": "2023-07-05T14:24:36+09:00",
          "tree_id": "0b22b2aba3954c38cd396124f92aa4ed06738e2f",
          "url": "https://github.com/greymistcube/libplanet/commit/6c3dc5c3571a388ecb2cd52f854ebee6a2d4580d"
        },
        "date": 1688535664532,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7914729.033333333,
            "unit": "ns",
            "range": "± 125930.58528687635"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19999885.45,
            "unit": "ns",
            "range": "± 450037.6624025892"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50314928.18518519,
            "unit": "ns",
            "range": "± 1398651.6505465608"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97988783.56666666,
            "unit": "ns",
            "range": "± 1424045.95087997"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200870588.2857143,
            "unit": "ns",
            "range": "± 2536257.7027475075"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61050.51063829787,
            "unit": "ns",
            "range": "± 8746.972398474261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 359705.61616161617,
            "unit": "ns",
            "range": "± 45229.21764940993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 344310.978021978,
            "unit": "ns",
            "range": "± 33884.942883882155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 321117.6382978723,
            "unit": "ns",
            "range": "± 31555.721188696236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4188994.573170732,
            "unit": "ns",
            "range": "± 150297.43558131493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3647609.75,
            "unit": "ns",
            "range": "± 43054.56553800847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18016.655555555557,
            "unit": "ns",
            "range": "± 1999.9856848426512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100357.55263157895,
            "unit": "ns",
            "range": "± 20621.51569298251"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 127787.7032967033,
            "unit": "ns",
            "range": "± 24610.279404479435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 146295.1701030928,
            "unit": "ns",
            "range": "± 37065.17690943259"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7063.923913043478,
            "unit": "ns",
            "range": "± 1416.3752392367571"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18993.75,
            "unit": "ns",
            "range": "± 3313.6175018061244"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1632000.793814433,
            "unit": "ns",
            "range": "± 157984.59816683462"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3112080.436170213,
            "unit": "ns",
            "range": "± 211967.0653764328"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2176734.237373737,
            "unit": "ns",
            "range": "± 256922.45655325436"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6268385.768421053,
            "unit": "ns",
            "range": "± 470855.53534170607"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3307133.5625,
            "unit": "ns",
            "range": "± 61303.39818853846"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3399397.3561643837,
            "unit": "ns",
            "range": "± 168572.90716147533"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4473999.731707317,
            "unit": "ns",
            "range": "± 234006.7889497025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3960851.4278350514,
            "unit": "ns",
            "range": "± 252214.67657179164"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7921154.308510638,
            "unit": "ns",
            "range": "± 517306.55279578944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7668992.259390783,
            "unit": "ns",
            "range": "± 524527.4860475514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2031239.222377232,
            "unit": "ns",
            "range": "± 19041.379437252905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1393852.168041088,
            "unit": "ns",
            "range": "± 38306.243971543074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2595994.856640625,
            "unit": "ns",
            "range": "± 66639.13171523914"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 867621.9616699219,
            "unit": "ns",
            "range": "± 8130.2606881434185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 769601.1078125,
            "unit": "ns",
            "range": "± 13214.552740430014"
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
          "id": "d1275d6f8e2ca50a35190a5fa6532b7a36601fbf",
          "message": "Changelog",
          "timestamp": "2023-07-05T15:16:19+09:00",
          "tree_id": "9adbe38ff2d5ed681460dcc83f97cc3ec25c8594",
          "url": "https://github.com/greymistcube/libplanet/commit/d1275d6f8e2ca50a35190a5fa6532b7a36601fbf"
        },
        "date": 1688538637307,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7571069.333333333,
            "unit": "ns",
            "range": "± 148199.10435676412"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19302703.818181816,
            "unit": "ns",
            "range": "± 543428.9211823989"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54793784.666666664,
            "unit": "ns",
            "range": "± 1259064.6125542698"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93382737.41666667,
            "unit": "ns",
            "range": "± 1211969.548518328"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 190067863.6153846,
            "unit": "ns",
            "range": "± 2572432.5110273394"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56722.83908045977,
            "unit": "ns",
            "range": "± 6390.67374777871"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 316181.5888888889,
            "unit": "ns",
            "range": "± 23079.822089987894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 302208.14285714284,
            "unit": "ns",
            "range": "± 15505.337750453524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 284468.61235955055,
            "unit": "ns",
            "range": "± 16370.786378372994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3965748.217391304,
            "unit": "ns",
            "range": "± 98318.29722384358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3635617,
            "unit": "ns",
            "range": "± 64131.82548709878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17962.112359550563,
            "unit": "ns",
            "range": "± 2030.5904897915455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84780.92307692308,
            "unit": "ns",
            "range": "± 6225.866203421495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81883.60638297872,
            "unit": "ns",
            "range": "± 6269.500872706059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98215.82022471911,
            "unit": "ns",
            "range": "± 10737.061943188139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5885.107142857143,
            "unit": "ns",
            "range": "± 679.6316688100767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17776.534090909092,
            "unit": "ns",
            "range": "± 1914.1067389306834"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1576260.1894736842,
            "unit": "ns",
            "range": "± 163168.69767763294"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2976878.415730337,
            "unit": "ns",
            "range": "± 249188.47203959388"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1958375.84375,
            "unit": "ns",
            "range": "± 143679.30179881994"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5789906.634920635,
            "unit": "ns",
            "range": "± 264009.60128681426"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3071000.4468085105,
            "unit": "ns",
            "range": "± 119757.63068341289"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3262476.5384615385,
            "unit": "ns",
            "range": "± 51379.80134030523"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4268617.851851852,
            "unit": "ns",
            "range": "± 212390.28513335486"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3639934.6666666665,
            "unit": "ns",
            "range": "± 144304.93636013713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7319467.521276596,
            "unit": "ns",
            "range": "± 518740.7170454757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6153803.7375,
            "unit": "ns",
            "range": "± 47311.64732525994"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1924439.6998697917,
            "unit": "ns",
            "range": "± 17920.684025821367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1244844.8170572917,
            "unit": "ns",
            "range": "± 10273.294505644742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2427247.4364583334,
            "unit": "ns",
            "range": "± 24205.319564032834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 856538.2720703125,
            "unit": "ns",
            "range": "± 6719.574972281696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 781696.9986049107,
            "unit": "ns",
            "range": "± 6300.652495211282"
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
          "id": "b15408c672e4bf1500c6478a1f29dc1335b79a41",
          "message": "Changelog",
          "timestamp": "2023-07-05T15:19:58+09:00",
          "tree_id": "9adbe38ff2d5ed681460dcc83f97cc3ec25c8594",
          "url": "https://github.com/greymistcube/libplanet/commit/b15408c672e4bf1500c6478a1f29dc1335b79a41"
        },
        "date": 1688538861162,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7505130.038461538,
            "unit": "ns",
            "range": "± 77274.22055426525"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21790881.266666666,
            "unit": "ns",
            "range": "± 245408.94032715115"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46612713.85185185,
            "unit": "ns",
            "range": "± 1303505.3014778062"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92076175.38461539,
            "unit": "ns",
            "range": "± 678747.6172313655"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 188957898.15384614,
            "unit": "ns",
            "range": "± 1398857.419352776"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54223.757894736846,
            "unit": "ns",
            "range": "± 6210.816458329722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 304538,
            "unit": "ns",
            "range": "± 11679.373401149493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 292742.0625,
            "unit": "ns",
            "range": "± 12838.946094653898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 271191.72105263156,
            "unit": "ns",
            "range": "± 17306.141469960177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4003266.214285714,
            "unit": "ns",
            "range": "± 61552.27380187769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3572054.090909091,
            "unit": "ns",
            "range": "± 87487.36529509308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16390.02380952381,
            "unit": "ns",
            "range": "± 2082.8298172484106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83350.19354838709,
            "unit": "ns",
            "range": "± 6791.373657647178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79960.85714285714,
            "unit": "ns",
            "range": "± 6288.707706094981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96963.56382978724,
            "unit": "ns",
            "range": "± 12239.538574968421"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5123.522222222222,
            "unit": "ns",
            "range": "± 614.721572632826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16951.887640449437,
            "unit": "ns",
            "range": "± 2391.016636373258"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1579570.8541666667,
            "unit": "ns",
            "range": "± 233137.2078842021"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2769129.396551724,
            "unit": "ns",
            "range": "± 120227.61516535525"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2007953.3789473684,
            "unit": "ns",
            "range": "± 232189.46834671783"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5599253.884615385,
            "unit": "ns",
            "range": "± 213738.81302817303"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3073938.99122807,
            "unit": "ns",
            "range": "± 131355.97382822577"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3298119.191780822,
            "unit": "ns",
            "range": "± 162192.2865882977"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4287732.717391305,
            "unit": "ns",
            "range": "± 160867.23303307718"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3610261.4683544305,
            "unit": "ns",
            "range": "± 186881.27956284725"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6664524.016129033,
            "unit": "ns",
            "range": "± 139825.75634287865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6286632.95625,
            "unit": "ns",
            "range": "± 58198.78272208161"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1923712.8150111607,
            "unit": "ns",
            "range": "± 12104.497930320855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1247900.2000177556,
            "unit": "ns",
            "range": "± 30151.264477405686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3003246.845572917,
            "unit": "ns",
            "range": "± 27734.680206462865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 789769.4766376202,
            "unit": "ns",
            "range": "± 1878.364791306124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 722178.705859375,
            "unit": "ns",
            "range": "± 4530.729904220977"
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
          "id": "28ff068b99f1c07425a759b2a9bfc84859a69f24",
          "message": "Changelog",
          "timestamp": "2023-07-05T15:24:39+09:00",
          "tree_id": "82675f4eaa822d0591ad0368b0dc897f3bb3f0d0",
          "url": "https://github.com/greymistcube/libplanet/commit/28ff068b99f1c07425a759b2a9bfc84859a69f24"
        },
        "date": 1688539450533,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8296856.756410256,
            "unit": "ns",
            "range": "± 287185.84161559714"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20678064.5,
            "unit": "ns",
            "range": "± 654752.1671115628"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50454973.72972973,
            "unit": "ns",
            "range": "± 1704946.7423254447"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103278952.8125,
            "unit": "ns",
            "range": "± 3998035.271009838"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220022338.0357143,
            "unit": "ns",
            "range": "± 9386502.07886378"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 87528.01052631579,
            "unit": "ns",
            "range": "± 25110.03714483078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 354292.91489361704,
            "unit": "ns",
            "range": "± 41246.8541347602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 365909.8829787234,
            "unit": "ns",
            "range": "± 57349.15913546857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 380848.6313131313,
            "unit": "ns",
            "range": "± 72294.56408159528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4605778.206185567,
            "unit": "ns",
            "range": "± 437585.9574792358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4114629.8021978023,
            "unit": "ns",
            "range": "± 245309.26723800984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19934.29069767442,
            "unit": "ns",
            "range": "± 3477.548078464207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102045.44736842105,
            "unit": "ns",
            "range": "± 19259.138966507384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99142.16666666667,
            "unit": "ns",
            "range": "± 16892.529187509997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113756.10416666667,
            "unit": "ns",
            "range": "± 16944.70626695092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6606.989130434783,
            "unit": "ns",
            "range": "± 1290.8688316556004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16947.01724137931,
            "unit": "ns",
            "range": "± 1492.072858608772"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1809949.6382978724,
            "unit": "ns",
            "range": "± 266266.8291062114"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3355198.4375,
            "unit": "ns",
            "range": "± 317450.4966628179"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2369444.7731958763,
            "unit": "ns",
            "range": "± 282966.2930750876"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6884060.4375,
            "unit": "ns",
            "range": "± 633956.3600531576"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3324982.9431818184,
            "unit": "ns",
            "range": "± 182892.0357929849"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3471288.559139785,
            "unit": "ns",
            "range": "± 202863.98493151186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4939018.131578947,
            "unit": "ns",
            "range": "± 290052.98368434794"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4275990.521739131,
            "unit": "ns",
            "range": "± 316248.7892922654"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8007091.083333333,
            "unit": "ns",
            "range": "± 633793.208421247"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6563617.9375,
            "unit": "ns",
            "range": "± 184364.58801106468"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1963142.0665457589,
            "unit": "ns",
            "range": "± 16029.249364093146"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1468154.2318307976,
            "unit": "ns",
            "range": "± 74709.52101621669"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3222373.32109375,
            "unit": "ns",
            "range": "± 85668.73387302378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 893413.0832375919,
            "unit": "ns",
            "range": "± 17944.93778458781"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 750445.7935965402,
            "unit": "ns",
            "range": "± 3373.472713724124"
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
          "id": "55a510c4ff65d25fabd617f71a56112b96caff98",
          "message": "Changelog",
          "timestamp": "2023-07-05T16:02:04+09:00",
          "tree_id": "35439410f73b67df527a747c9e24714719b604bd",
          "url": "https://github.com/greymistcube/libplanet/commit/55a510c4ff65d25fabd617f71a56112b96caff98"
        },
        "date": 1688541726774,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9183795.989583334,
            "unit": "ns",
            "range": "± 573928.6969207015"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21892983.763157893,
            "unit": "ns",
            "range": "± 922122.5266427553"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55953060.65,
            "unit": "ns",
            "range": "± 2474918.2966452693"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105335838.95652173,
            "unit": "ns",
            "range": "± 4015692.3733113636"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205982383,
            "unit": "ns",
            "range": "± 3498442.951580725"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69371.24444444444,
            "unit": "ns",
            "range": "± 10766.89093420258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 318637.2894736842,
            "unit": "ns",
            "range": "± 18290.661270745917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 345530.27894736844,
            "unit": "ns",
            "range": "± 39990.83144208606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 369352.65591397847,
            "unit": "ns",
            "range": "± 81080.29377567575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4412124.355670103,
            "unit": "ns",
            "range": "± 342308.57040931133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4185604.409090909,
            "unit": "ns",
            "range": "± 291744.6774513385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20790.136363636364,
            "unit": "ns",
            "range": "± 3102.558788913191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 116641.79166666667,
            "unit": "ns",
            "range": "± 23181.054077081157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 106864.37368421053,
            "unit": "ns",
            "range": "± 10553.466807865821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103847.47752808989,
            "unit": "ns",
            "range": "± 16001.723581154347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5923.688172043011,
            "unit": "ns",
            "range": "± 830.9745323687937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18096.989361702126,
            "unit": "ns",
            "range": "± 3414.2767759968456"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1666699.9680851065,
            "unit": "ns",
            "range": "± 191057.90972414686"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3029775.710526316,
            "unit": "ns",
            "range": "± 153656.5219653077"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2189054.96875,
            "unit": "ns",
            "range": "± 259113.92426951198"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6266583.638297873,
            "unit": "ns",
            "range": "± 449893.06688149786"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3297325.92,
            "unit": "ns",
            "range": "± 73084.07414063158"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3490529.9,
            "unit": "ns",
            "range": "± 103442.73154891068"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4374529.857142857,
            "unit": "ns",
            "range": "± 143151.54853384447"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3862237.1979166665,
            "unit": "ns",
            "range": "± 313203.65914879093"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7137170.987654321,
            "unit": "ns",
            "range": "± 374907.6880375186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7150071.695628157,
            "unit": "ns",
            "range": "± 500651.0913444105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2010762.166108631,
            "unit": "ns",
            "range": "± 71785.90716781732"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1390158.2864908853,
            "unit": "ns",
            "range": "± 62048.98076050481"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2894036.0249094204,
            "unit": "ns",
            "range": "± 139574.80093058964"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 830702.8106119792,
            "unit": "ns",
            "range": "± 14213.095533819689"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 848260.1768663195,
            "unit": "ns",
            "range": "± 49550.906799522585"
          }
        ]
      }
    ]
  }
}