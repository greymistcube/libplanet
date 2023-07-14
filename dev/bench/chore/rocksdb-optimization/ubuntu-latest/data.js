window.BENCHMARK_DATA = {
  "lastUpdate": 1689316722354,
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
          "id": "3ce762868d821b2401cedc45be76202d31c80175",
          "message": "RocksDBStore Concat optimization",
          "timestamp": "2023-07-13T04:11:48+09:00",
          "tree_id": "ee5cdbe513ebd68a9a69d4ef74a3ade03e5b40a4",
          "url": "https://github.com/greymistcube/libplanet/commit/3ce762868d821b2401cedc45be76202d31c80175"
        },
        "date": 1689189972153,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 293575.3461538461,
            "unit": "ns",
            "range": "± 8039.89917321011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 275132.6170212766,
            "unit": "ns",
            "range": "± 10166.259310674597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 240537.69444444444,
            "unit": "ns",
            "range": "± 7731.319062542005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4294249.714285715,
            "unit": "ns",
            "range": "± 28716.38021282405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3867602.0714285714,
            "unit": "ns",
            "range": "± 27135.956970168074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19574.31914893617,
            "unit": "ns",
            "range": "± 1376.1119469712908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91253.05633802817,
            "unit": "ns",
            "range": "± 4477.248788158459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75064,
            "unit": "ns",
            "range": "± 3572.553591853685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94816.80612244898,
            "unit": "ns",
            "range": "± 11667.227240329552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5501.031578947369,
            "unit": "ns",
            "range": "± 661.1683799545589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17063.510416666668,
            "unit": "ns",
            "range": "± 1484.2222134295528"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1417158.0206185568,
            "unit": "ns",
            "range": "± 83725.14883421868"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2632450.409090909,
            "unit": "ns",
            "range": "± 61727.02007391599"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1842147.5257731958,
            "unit": "ns",
            "range": "± 126394.49442989768"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4936975.416666667,
            "unit": "ns",
            "range": "± 162670.29094202875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6018009.1515625,
            "unit": "ns",
            "range": "± 28126.5010446525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2012834.0513392857,
            "unit": "ns",
            "range": "± 2603.4552786088157"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1354705.2451171875,
            "unit": "ns",
            "range": "± 917.7246429723305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2601471.984114583,
            "unit": "ns",
            "range": "± 2985.6330769170004"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 821419.8282001202,
            "unit": "ns",
            "range": "± 344.9836192940262"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 736622.9541713169,
            "unit": "ns",
            "range": "± 1812.4744237224456"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3336199.44,
            "unit": "ns",
            "range": "± 86825.22868243231"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3505994.6,
            "unit": "ns",
            "range": "± 91063.89246201447"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4371204.933333334,
            "unit": "ns",
            "range": "± 62833.63335196783"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3786133.861111111,
            "unit": "ns",
            "range": "± 86791.7581034884"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6419121.692307692,
            "unit": "ns",
            "range": "± 81148.15551753124"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7692555,
            "unit": "ns",
            "range": "± 135207.6664864618"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19434440.4,
            "unit": "ns",
            "range": "± 109995.72109586808"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50345507.78571428,
            "unit": "ns",
            "range": "± 584074.3175425511"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99947275.2,
            "unit": "ns",
            "range": "± 786649.9677609567"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201640225.2142857,
            "unit": "ns",
            "range": "± 563227.5266821474"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47302.925531914894,
            "unit": "ns",
            "range": "± 3211.055868416773"
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
          "id": "9b76e9209f1db4f75c0c2e6aafb5295d2bedb076",
          "message": "Changelog",
          "timestamp": "2023-07-13T10:58:28+09:00",
          "tree_id": "85b2160af011b1b4f21a7d91f15f1ddcfae72466",
          "url": "https://github.com/greymistcube/libplanet/commit/9b76e9209f1db4f75c0c2e6aafb5295d2bedb076"
        },
        "date": 1689214570594,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 319467.1460674157,
            "unit": "ns",
            "range": "± 27892.815618065913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 313485.91397849465,
            "unit": "ns",
            "range": "± 34808.81550844866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 280507.86813186813,
            "unit": "ns",
            "range": "± 24161.33065053826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4482645.0625,
            "unit": "ns",
            "range": "± 303060.0031861265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4116586.0102040814,
            "unit": "ns",
            "range": "± 294132.2672600825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29695.042553191488,
            "unit": "ns",
            "range": "± 7091.841233712952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102285.92307692308,
            "unit": "ns",
            "range": "± 12739.744085368584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94813.09574468085,
            "unit": "ns",
            "range": "± 11343.616690209094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116628.52688172043,
            "unit": "ns",
            "range": "± 16565.6163651201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5200.0952380952385,
            "unit": "ns",
            "range": "± 1007.2257451355175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30122.384615384617,
            "unit": "ns",
            "range": "± 6643.092519082811"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1478749.030927835,
            "unit": "ns",
            "range": "± 206432.75859997838"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2900199.525773196,
            "unit": "ns",
            "range": "± 242511.92996647494"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1973364.387755102,
            "unit": "ns",
            "range": "± 231786.36755709344"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5744560.87,
            "unit": "ns",
            "range": "± 699548.4518199652"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6204383.585693359,
            "unit": "ns",
            "range": "± 173085.64453932334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2085823.6226399739,
            "unit": "ns",
            "range": "± 81045.89269776"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1424753.0348958333,
            "unit": "ns",
            "range": "± 24379.768017455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2849002.123798077,
            "unit": "ns",
            "range": "± 76658.94514555798"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 945888.4227818081,
            "unit": "ns",
            "range": "± 9107.260509516185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 878818.3718377976,
            "unit": "ns",
            "range": "± 30423.557898420917"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3366656.3608247424,
            "unit": "ns",
            "range": "± 269659.16893159575"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3552372.102040816,
            "unit": "ns",
            "range": "± 303494.0740570773"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4583249.05,
            "unit": "ns",
            "range": "± 384710.20900749887"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3861599.2315789475,
            "unit": "ns",
            "range": "± 269157.3290725268"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7160768.1875,
            "unit": "ns",
            "range": "± 496518.0913825336"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8060894.484210527,
            "unit": "ns",
            "range": "± 544954.3063104223"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22080522.63,
            "unit": "ns",
            "range": "± 2079203.0567059158"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56154723.91,
            "unit": "ns",
            "range": "± 4733462.599291946"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108980810.31632653,
            "unit": "ns",
            "range": "± 7061756.787659338"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223731647.87878788,
            "unit": "ns",
            "range": "± 13833812.970778404"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62033.76470588235,
            "unit": "ns",
            "range": "± 6146.122824782379"
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
          "id": "edaf0f10379848a495bf5148b35b9fc941dbc46a",
          "message": "Changelog",
          "timestamp": "2023-07-14T15:19:08+09:00",
          "tree_id": "75da47c8ef65a8990e003614dab5a1d38ddb5f49",
          "url": "https://github.com/greymistcube/libplanet/commit/edaf0f10379848a495bf5148b35b9fc941dbc46a"
        },
        "date": 1689316712997,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 391069.3195876289,
            "unit": "ns",
            "range": "± 45013.08196433622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 376906.2947368421,
            "unit": "ns",
            "range": "± 47664.85915039611"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 334396.59375,
            "unit": "ns",
            "range": "± 43056.989345353155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5593920.063829787,
            "unit": "ns",
            "range": "± 322263.3726504105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5259487.958333333,
            "unit": "ns",
            "range": "± 258251.02997983602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30035.95918367347,
            "unit": "ns",
            "range": "± 10402.209174481015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 124176.58510638298,
            "unit": "ns",
            "range": "± 22852.383603311362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 130950.81052631579,
            "unit": "ns",
            "range": "± 24822.605546409788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 144699.18279569893,
            "unit": "ns",
            "range": "± 22777.29545772273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9482.55,
            "unit": "ns",
            "range": "± 4498.1988572642795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28405.377551020407,
            "unit": "ns",
            "range": "± 9778.198658255802"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1851337.6629213484,
            "unit": "ns",
            "range": "± 226442.8873104623"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3572256.5894736843,
            "unit": "ns",
            "range": "± 297779.921258919"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2354853.336734694,
            "unit": "ns",
            "range": "± 230831.80972890306"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6759506.145833333,
            "unit": "ns",
            "range": "± 585648.939917062"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7921453.495028409,
            "unit": "ns",
            "range": "± 185828.66830231642"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2493380.761418269,
            "unit": "ns",
            "range": "± 64503.29461325486"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1773727.7484654018,
            "unit": "ns",
            "range": "± 21518.16931585912"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3344111.040670956,
            "unit": "ns",
            "range": "± 64131.02292245889"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1083819.7864583333,
            "unit": "ns",
            "range": "± 25608.200637582795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1002994.06015625,
            "unit": "ns",
            "range": "± 14847.357347872745"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4271605.659574468,
            "unit": "ns",
            "range": "± 315071.24965477677"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4503500.903225807,
            "unit": "ns",
            "range": "± 286354.30807381996"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5882606.139534884,
            "unit": "ns",
            "range": "± 342722.155893531"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5136653.9125,
            "unit": "ns",
            "range": "± 267652.4680248196"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9101706.252631579,
            "unit": "ns",
            "range": "± 596669.3331611378"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9520923.306122448,
            "unit": "ns",
            "range": "± 818830.7142409337"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27530816.409638554,
            "unit": "ns",
            "range": "± 1468092.3929639563"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68796212.07692307,
            "unit": "ns",
            "range": "± 706877.0750485855"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139892062.05882353,
            "unit": "ns",
            "range": "± 2707056.7938384777"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 285740256.6111111,
            "unit": "ns",
            "range": "± 5865274.516915852"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65992.12631578947,
            "unit": "ns",
            "range": "± 15619.414529334757"
          }
        ]
      }
    ]
  }
}