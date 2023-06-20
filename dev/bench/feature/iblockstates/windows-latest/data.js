window.BENCHMARK_DATA = {
  "lastUpdate": 1687245756399,
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
          "id": "4f2ee2a881d1fb1a3f63839ef3ba3e9e64ec8b19",
          "message": "Added back in caching",
          "timestamp": "2023-06-15T14:05:24+09:00",
          "tree_id": "110b574e04752f39a883ac7f751da8fc894a7002",
          "url": "https://github.com/greymistcube/libplanet/commit/4f2ee2a881d1fb1a3f63839ef3ba3e9e64ec8b19"
        },
        "date": 1686807627445,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1704072.1649484537,
            "unit": "ns",
            "range": "± 224261.67413977033"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3139492.6315789474,
            "unit": "ns",
            "range": "± 278459.3874823467"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2624606.1224489794,
            "unit": "ns",
            "range": "± 248681.5923930013"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6650768.75,
            "unit": "ns",
            "range": "± 534828.905905529"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58854.63917525773,
            "unit": "ns",
            "range": "± 12938.452224365918"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8323914.814814814,
            "unit": "ns",
            "range": "± 346988.59391150315"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23862284.210526317,
            "unit": "ns",
            "range": "± 1675840.9094195697"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62538721.05263158,
            "unit": "ns",
            "range": "± 2155891.0670667756"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125312215.27777778,
            "unit": "ns",
            "range": "± 6125585.823911157"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 256246924.3243243,
            "unit": "ns",
            "range": "± 8544064.606640533"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5950086.767578125,
            "unit": "ns",
            "range": "± 111475.12543987119"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1892103.3723958333,
            "unit": "ns",
            "range": "± 27644.66549655791"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1451748.9955357143,
            "unit": "ns",
            "range": "± 22288.955717412086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3167563.9583333335,
            "unit": "ns",
            "range": "± 50806.43335472885"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1040954.9272017046,
            "unit": "ns",
            "range": "± 22339.495843713423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 938964.9658203125,
            "unit": "ns",
            "range": "± 10598.27076473489"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3884287.6288659796,
            "unit": "ns",
            "range": "± 271285.39410313667"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4038527.551020408,
            "unit": "ns",
            "range": "± 403625.92148033297"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5099109.183673469,
            "unit": "ns",
            "range": "± 375756.0483251535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4806372.631578947,
            "unit": "ns",
            "range": "± 515975.2965887123"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8412810.30927835,
            "unit": "ns",
            "range": "± 548099.5867321423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 323494.3298969072,
            "unit": "ns",
            "range": "± 52771.46081823047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 314650,
            "unit": "ns",
            "range": "± 40681.92667382823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 273775,
            "unit": "ns",
            "range": "± 36747.717437170235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4634322.916666667,
            "unit": "ns",
            "range": "± 375950.7651077302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4353996.875,
            "unit": "ns",
            "range": "± 360525.90518008696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21206.521739130436,
            "unit": "ns",
            "range": "± 6647.891582601788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107545.36082474227,
            "unit": "ns",
            "range": "± 21372.06617594251"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 112612.24489795919,
            "unit": "ns",
            "range": "± 22409.940105387064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127621.97802197802,
            "unit": "ns",
            "range": "± 24172.57767801174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6211.702127659574,
            "unit": "ns",
            "range": "± 1625.1290359341574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22962.244897959183,
            "unit": "ns",
            "range": "± 6916.69898183997"
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
          "id": "6939f2f1409576ece7d5d7afedd55a9e41b222e2",
          "message": "Changelog",
          "timestamp": "2023-06-15T14:24:20+09:00",
          "tree_id": "c7ee0cc40c745c22e6df2ec74f560c23631c0f7c",
          "url": "https://github.com/greymistcube/libplanet/commit/6939f2f1409576ece7d5d7afedd55a9e41b222e2"
        },
        "date": 1686807928157,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1642826.2626262626,
            "unit": "ns",
            "range": "± 248839.9688947959"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3231282.6530612246,
            "unit": "ns",
            "range": "± 430780.9903590737"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2638908.3333333335,
            "unit": "ns",
            "range": "± 291968.3730769362"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6823128.125,
            "unit": "ns",
            "range": "± 750962.8079238468"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61132.63157894737,
            "unit": "ns",
            "range": "± 14587.268145108257"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8537488.043478262,
            "unit": "ns",
            "range": "± 574551.0661879136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23820950,
            "unit": "ns",
            "range": "± 1401703.3666972932"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64862544.047619045,
            "unit": "ns",
            "range": "± 3478057.9725712673"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 131366878.35051547,
            "unit": "ns",
            "range": "± 7900572.853072992"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 271797868.67469877,
            "unit": "ns",
            "range": "± 14362875.794543881"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6264106.8359375,
            "unit": "ns",
            "range": "± 179604.10213549781"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2016953.2151442308,
            "unit": "ns",
            "range": "± 32073.614477243013"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1553770.21484375,
            "unit": "ns",
            "range": "± 44926.08181256621"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3334928.5845588236,
            "unit": "ns",
            "range": "± 68230.49890412597"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1069521.1647727273,
            "unit": "ns",
            "range": "± 25456.722566877375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1013630.8959960938,
            "unit": "ns",
            "range": "± 19900.884381707412"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3658821.052631579,
            "unit": "ns",
            "range": "± 342243.1849389817"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3904276.5306122447,
            "unit": "ns",
            "range": "± 543721.7744400258"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5407744.791666667,
            "unit": "ns",
            "range": "± 627096.5000648946"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5163591.489361702,
            "unit": "ns",
            "range": "± 460128.8411569357"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8893089.47368421,
            "unit": "ns",
            "range": "± 719105.281179281"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 327911.5789473684,
            "unit": "ns",
            "range": "± 48161.94724441714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 335683.87096774194,
            "unit": "ns",
            "range": "± 64428.9991593756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 290691.4893617021,
            "unit": "ns",
            "range": "± 50995.52723286572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4848479.787234043,
            "unit": "ns",
            "range": "± 494296.27800264297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4534813.684210527,
            "unit": "ns",
            "range": "± 559912.0000406079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22836.73469387755,
            "unit": "ns",
            "range": "± 7544.881350205638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100303.2258064516,
            "unit": "ns",
            "range": "± 19706.07637260155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105695.69892473119,
            "unit": "ns",
            "range": "± 26753.179063343567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 131850.52631578947,
            "unit": "ns",
            "range": "± 28804.01447229266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6947.777777777777,
            "unit": "ns",
            "range": "± 1830.9589663832655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23107.14285714286,
            "unit": "ns",
            "range": "± 7435.097181818998"
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
          "id": "cb0a0e165aa4f47e0a781e57e1d862caf74607e5",
          "message": "Changelog",
          "timestamp": "2023-06-20T16:03:37+09:00",
          "tree_id": "02536a43bb60d6ac2558deeda114df9106d0245f",
          "url": "https://github.com/greymistcube/libplanet/commit/cb0a0e165aa4f47e0a781e57e1d862caf74607e5"
        },
        "date": 1687245734685,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1720353.6082474226,
            "unit": "ns",
            "range": "± 179862.37682244703"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3286652.1276595746,
            "unit": "ns",
            "range": "± 185652.15058525384"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2731933.3333333335,
            "unit": "ns",
            "range": "± 197826.45965681857"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6636450,
            "unit": "ns",
            "range": "± 346073.51783520717"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55930.232558139534,
            "unit": "ns",
            "range": "± 3064.70686698982"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9383320,
            "unit": "ns",
            "range": "± 168514.24780796937"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25186897.14285714,
            "unit": "ns",
            "range": "± 812979.5176805301"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64455626.595744684,
            "unit": "ns",
            "range": "± 2479206.4189814036"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129012423.33333333,
            "unit": "ns",
            "range": "± 3761541.44666173"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 256030854.54545453,
            "unit": "ns",
            "range": "± 6285237.234127608"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6178468.59375,
            "unit": "ns",
            "range": "± 84036.83178900245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1948016.029575893,
            "unit": "ns",
            "range": "± 19236.764287839058"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1496833.579799107,
            "unit": "ns",
            "range": "± 24058.846061835422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3286803.2645089286,
            "unit": "ns",
            "range": "± 19426.57238447295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1045907.2265625,
            "unit": "ns",
            "range": "± 15124.307927823611"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 964683.095703125,
            "unit": "ns",
            "range": "± 21247.812331691457"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4018364.383561644,
            "unit": "ns",
            "range": "± 200026.79985015828"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4189135.135135135,
            "unit": "ns",
            "range": "± 141355.6354577902"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5163441.304347826,
            "unit": "ns",
            "range": "± 197221.76077376786"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5104576.923076923,
            "unit": "ns",
            "range": "± 260816.15405067647"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8161317.857142857,
            "unit": "ns",
            "range": "± 205887.265185607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 317819.1489361702,
            "unit": "ns",
            "range": "± 11554.55186604664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 302875.75757575757,
            "unit": "ns",
            "range": "± 13517.829372932289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 287771.6216216216,
            "unit": "ns",
            "range": "± 14284.942932843469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4988612.5,
            "unit": "ns",
            "range": "± 93906.75428317177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4582424.242424242,
            "unit": "ns",
            "range": "± 139889.27324473235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23681.720430107525,
            "unit": "ns",
            "range": "± 2086.704612153436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 109385.05154639175,
            "unit": "ns",
            "range": "± 8381.689383674307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94253.60824742269,
            "unit": "ns",
            "range": "± 8222.087400406983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115281.44329896907,
            "unit": "ns",
            "range": "± 18440.983173225577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6565.625,
            "unit": "ns",
            "range": "± 921.3066379076141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22835.416666666668,
            "unit": "ns",
            "range": "± 1836.6433436924615"
          }
        ]
      }
    ]
  }
}