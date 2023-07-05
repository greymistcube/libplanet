window.BENCHMARK_DATA = {
  "lastUpdate": 1688538651807,
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
      }
    ]
  }
}