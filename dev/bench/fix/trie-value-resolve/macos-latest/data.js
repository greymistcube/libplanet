window.BENCHMARK_DATA = {
  "lastUpdate": 1694143536087,
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
          "id": "3d2009bc9b8484ac33f00f7d05eb3b419a512285",
          "message": "Bug fix for trie value resolution",
          "timestamp": "2023-09-08T11:58:58+09:00",
          "tree_id": "21775bbb67c59255d5b850b82f213bed62184d45",
          "url": "https://github.com/greymistcube/libplanet/commit/3d2009bc9b8484ac33f00f7d05eb3b419a512285"
        },
        "date": 1694142905732,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7696966.5,
            "unit": "ns",
            "range": "± 84565.72414855342"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18803512.133333333,
            "unit": "ns",
            "range": "± 230593.59515881326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46021308.94444445,
            "unit": "ns",
            "range": "± 977619.5066935158"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91791352.35714285,
            "unit": "ns",
            "range": "± 1304684.5667426288"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 188159535.16666666,
            "unit": "ns",
            "range": "± 1249218.8348915533"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53853.62765957447,
            "unit": "ns",
            "range": "± 5192.695347061945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 276096.40506329114,
            "unit": "ns",
            "range": "± 14275.801837032848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 290419.9569892473,
            "unit": "ns",
            "range": "± 22953.377308529023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 264896.4324324324,
            "unit": "ns",
            "range": "± 8047.276176655265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3881763.0263157897,
            "unit": "ns",
            "range": "± 132134.35070483555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3467982.8571428573,
            "unit": "ns",
            "range": "± 59342.87678704696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17096.516483516483,
            "unit": "ns",
            "range": "± 2209.9656073876777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79183.74725274726,
            "unit": "ns",
            "range": "± 5471.689939220295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71592.80434782608,
            "unit": "ns",
            "range": "± 5395.006372887558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83378.03157894737,
            "unit": "ns",
            "range": "± 12482.496894973967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4576.264367816092,
            "unit": "ns",
            "range": "± 577.7682697094277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16360.170588235294,
            "unit": "ns",
            "range": "± 1723.8820558776722"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1463965.2842105264,
            "unit": "ns",
            "range": "± 188051.36795039306"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2726585.87654321,
            "unit": "ns",
            "range": "± 142190.25294182287"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1843166.59375,
            "unit": "ns",
            "range": "± 200160.10170882172"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5053577.456521739,
            "unit": "ns",
            "range": "± 183902.28944254387"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3070084.864864865,
            "unit": "ns",
            "range": "± 154008.9223806796"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3250975.4411764704,
            "unit": "ns",
            "range": "± 170007.22321001493"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4986424.674603174,
            "unit": "ns",
            "range": "± 229142.78156048353"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3744355.577777778,
            "unit": "ns",
            "range": "± 298702.2141330342"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6343649.261904762,
            "unit": "ns",
            "range": "± 227092.93668514522"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5391818.558333334,
            "unit": "ns",
            "range": "± 51343.17080304087"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1658445.9235677083,
            "unit": "ns",
            "range": "± 17778.167334698475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 944425.4147786458,
            "unit": "ns",
            "range": "± 5705.11836264377"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2407313.095572917,
            "unit": "ns",
            "range": "± 34313.87868473375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 737956.1685267857,
            "unit": "ns",
            "range": "± 2931.5203689394293"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 724973.3432942708,
            "unit": "ns",
            "range": "± 4034.2647928413076"
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
          "id": "a3658ff45129453a2361cbb951adbc69bdefd8f6",
          "message": "Changelog",
          "timestamp": "2023-09-08T12:04:22+09:00",
          "tree_id": "4be2bac805b5852cf01c6cd193c2121c3865b21c",
          "url": "https://github.com/greymistcube/libplanet/commit/a3658ff45129453a2361cbb951adbc69bdefd8f6"
        },
        "date": 1694143262657,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7803353,
            "unit": "ns",
            "range": "± 152108.05714031062"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20820702.086956523,
            "unit": "ns",
            "range": "± 790552.1212557313"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52564309.8,
            "unit": "ns",
            "range": "± 1535523.6380735054"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101655207.26666667,
            "unit": "ns",
            "range": "± 1511063.7878376786"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210976040.1875,
            "unit": "ns",
            "range": "± 4074094.0055368906"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60848.12365591398,
            "unit": "ns",
            "range": "± 9159.74042008546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 290814.69696969696,
            "unit": "ns",
            "range": "± 12628.648100154232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 298327.14130434784,
            "unit": "ns",
            "range": "± 29639.107171149582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 277822.87234042556,
            "unit": "ns",
            "range": "± 15823.462318562542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4074928.0384615385,
            "unit": "ns",
            "range": "± 109551.64299908269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3548641.090909091,
            "unit": "ns",
            "range": "± 86304.11924722344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20377.21505376344,
            "unit": "ns",
            "range": "± 2997.4977095014724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87730.5752688172,
            "unit": "ns",
            "range": "± 9743.481512447359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83851.36458333333,
            "unit": "ns",
            "range": "± 10246.69878147647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93776.62244897959,
            "unit": "ns",
            "range": "± 14675.320895534565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6667.386597938144,
            "unit": "ns",
            "range": "± 1442.639095519971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19173.908163265307,
            "unit": "ns",
            "range": "± 4146.590456526841"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1520614.375,
            "unit": "ns",
            "range": "± 158316.47960649812"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2914692.040229885,
            "unit": "ns",
            "range": "± 242748.54030336425"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1989514.606060606,
            "unit": "ns",
            "range": "± 234080.46771167975"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5347114.6375,
            "unit": "ns",
            "range": "± 268618.63510891853"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3262027.6764705884,
            "unit": "ns",
            "range": "± 144355.2746756585"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3557520.0434782607,
            "unit": "ns",
            "range": "± 134840.7347684184"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4457874.294117647,
            "unit": "ns",
            "range": "± 178510.77771969893"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3829225.2391304346,
            "unit": "ns",
            "range": "± 230516.18134801698"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6504094.635135135,
            "unit": "ns",
            "range": "± 206919.0540701527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5667500.5234375,
            "unit": "ns",
            "range": "± 92715.97202256694"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1688575.2046274038,
            "unit": "ns",
            "range": "± 45800.631884535804"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 988696.148828125,
            "unit": "ns",
            "range": "± 13735.644050940235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2444586.5280230977,
            "unit": "ns",
            "range": "± 60421.65575303651"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 767725.5431189904,
            "unit": "ns",
            "range": "± 3589.1558222962362"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 741694.7538411458,
            "unit": "ns",
            "range": "± 3937.9305486988183"
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
          "id": "7e552b6ae2fc2610b8b4c9e5048b283641346e5f",
          "message": "Changelog",
          "timestamp": "2023-09-08T12:08:22+09:00",
          "tree_id": "cfd07e45b9754e4748b068efa5c64f79ca076066",
          "url": "https://github.com/greymistcube/libplanet/commit/7e552b6ae2fc2610b8b4c9e5048b283641346e5f"
        },
        "date": 1694143521394,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8671956.530864198,
            "unit": "ns",
            "range": "± 512254.0623552458"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21112372.0625,
            "unit": "ns",
            "range": "± 407331.8994926977"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52035178.54054054,
            "unit": "ns",
            "range": "± 1604987.4719715037"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104340823.7,
            "unit": "ns",
            "range": "± 1302088.001097863"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209860471.46666667,
            "unit": "ns",
            "range": "± 2913602.406288792"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64802.31318681319,
            "unit": "ns",
            "range": "± 8422.163215010061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 340569.0215053763,
            "unit": "ns",
            "range": "± 34333.67432399989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 311956.0164835165,
            "unit": "ns",
            "range": "± 23246.249178147064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 280164.0164835165,
            "unit": "ns",
            "range": "± 17872.393855305723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4106522.962962963,
            "unit": "ns",
            "range": "± 112091.84955942347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3786966.388888889,
            "unit": "ns",
            "range": "± 77007.20562246785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19368.489247311827,
            "unit": "ns",
            "range": "± 4048.41882579033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99866.6170212766,
            "unit": "ns",
            "range": "± 13788.268850539609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 100281.45918367348,
            "unit": "ns",
            "range": "± 11766.135013593488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97377.59595959596,
            "unit": "ns",
            "range": "± 17788.23124182493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5417.635416666667,
            "unit": "ns",
            "range": "± 1756.6412126243508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19471.05681818182,
            "unit": "ns",
            "range": "± 3316.835050971826"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1616022.8979591837,
            "unit": "ns",
            "range": "± 196240.2015033937"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3096861.7560975607,
            "unit": "ns",
            "range": "± 269433.7449868699"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2187716.2613636362,
            "unit": "ns",
            "range": "± 306812.0224122036"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5722063.409090909,
            "unit": "ns",
            "range": "± 445767.646459057"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3388123.283950617,
            "unit": "ns",
            "range": "± 172229.45610218905"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3729166.0659340657,
            "unit": "ns",
            "range": "± 392121.69467732566"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4497140.93258427,
            "unit": "ns",
            "range": "± 248284.99800690913"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4067963.732323232,
            "unit": "ns",
            "range": "± 319508.9105951676"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7013858.647368421,
            "unit": "ns",
            "range": "± 431046.9916631978"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5762635.951516544,
            "unit": "ns",
            "range": "± 115138.89348642481"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1856178.3620605469,
            "unit": "ns",
            "range": "± 36281.72693155115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1100433.9451822916,
            "unit": "ns",
            "range": "± 12354.49273146257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2737877.4274902344,
            "unit": "ns",
            "range": "± 48658.77113631271"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 882694.6653395433,
            "unit": "ns",
            "range": "± 10104.602979292813"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 738927.3466796875,
            "unit": "ns",
            "range": "± 4980.576627257574"
          }
        ]
      }
    ]
  }
}