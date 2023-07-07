window.BENCHMARK_DATA = {
  "lastUpdate": 1688717404201,
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
          "id": "c37b35e24d3b2dbe5d84caed9104cd77a4d5835a",
          "message": "Removed all getters",
          "timestamp": "2023-07-07T15:45:31+09:00",
          "tree_id": "a96da9c51e476c1f685c53e176dbe6ee9b5516f7",
          "url": "https://github.com/greymistcube/libplanet/commit/c37b35e24d3b2dbe5d84caed9104cd77a4d5835a"
        },
        "date": 1688713164934,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 292278.875,
            "unit": "ns",
            "range": "± 8212.4272540599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 281950.82352941175,
            "unit": "ns",
            "range": "± 10176.925466379093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 249042.9411764706,
            "unit": "ns",
            "range": "± 7065.561132539089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4641666.214285715,
            "unit": "ns",
            "range": "± 27191.499523475435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4040610.214285714,
            "unit": "ns",
            "range": "± 63049.67034035525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19504.484210526316,
            "unit": "ns",
            "range": "± 1384.1608400511188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89840.37234042553,
            "unit": "ns",
            "range": "± 5820.11185641326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73511.36842105263,
            "unit": "ns",
            "range": "± 1510.2273636967643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92184.77551020408,
            "unit": "ns",
            "range": "± 13629.322854597654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5074.041666666667,
            "unit": "ns",
            "range": "± 707.4782483792874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17460.6875,
            "unit": "ns",
            "range": "± 1277.8627742198464"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1588430.855670103,
            "unit": "ns",
            "range": "± 101184.65887116872"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2991227.027777778,
            "unit": "ns",
            "range": "± 146593.548031453"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1975758.0579710144,
            "unit": "ns",
            "range": "± 94836.12835165659"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5261569.15,
            "unit": "ns",
            "range": "± 183870.53841913072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5955783.089583334,
            "unit": "ns",
            "range": "± 54450.183855297786"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1935466.6283482143,
            "unit": "ns",
            "range": "± 2410.9198479798915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1391971.015625,
            "unit": "ns",
            "range": "± 3775.5382562325804"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2674100.74375,
            "unit": "ns",
            "range": "± 2158.1673765082296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 882053.3229817708,
            "unit": "ns",
            "range": "± 641.36347431162"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 771800.3392427885,
            "unit": "ns",
            "range": "± 389.73370597252637"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3468795.4857142856,
            "unit": "ns",
            "range": "± 113034.47165600084"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3894371.4375,
            "unit": "ns",
            "range": "± 51655.87386408733"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4486864.434782608,
            "unit": "ns",
            "range": "± 110907.8706194823"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4302905.576923077,
            "unit": "ns",
            "range": "± 116702.38644660976"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6896621.736842105,
            "unit": "ns",
            "range": "± 233442.0286340781"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7944241.214285715,
            "unit": "ns",
            "range": "± 39971.88441157219"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22886114.230769232,
            "unit": "ns",
            "range": "± 618634.0712268155"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55914414.5882353,
            "unit": "ns",
            "range": "± 1072846.8556856716"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111667206.93333334,
            "unit": "ns",
            "range": "± 1396063.4759410103"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223566902.80952382,
            "unit": "ns",
            "range": "± 5224089.264101453"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49864.90217391304,
            "unit": "ns",
            "range": "± 2944.506787408398"
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
          "id": "0aed9b230db9b2c83eecbce1661b3802ebae291f",
          "message": "Changelog",
          "timestamp": "2023-07-07T15:47:32+09:00",
          "tree_id": "b15415eece6a9424f5306a422cfab23d029cd5fe",
          "url": "https://github.com/greymistcube/libplanet/commit/0aed9b230db9b2c83eecbce1661b3802ebae291f"
        },
        "date": 1688713441538,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 353890.6666666667,
            "unit": "ns",
            "range": "± 4922.998036427261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 338767.7368421053,
            "unit": "ns",
            "range": "± 11054.289581202967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 317087.1724137931,
            "unit": "ns",
            "range": "± 9100.770842818622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5560469.066666666,
            "unit": "ns",
            "range": "± 26902.427693071724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5017648.4,
            "unit": "ns",
            "range": "± 43584.775626358336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26422.863157894735,
            "unit": "ns",
            "range": "± 2730.7556261199325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 119682.13541666667,
            "unit": "ns",
            "range": "± 7606.301832753088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 107518.38,
            "unit": "ns",
            "range": "± 8248.574848169748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120473.89583333333,
            "unit": "ns",
            "range": "± 12734.142265230914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7199.4315789473685,
            "unit": "ns",
            "range": "± 1066.0217120122475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24112.76842105263,
            "unit": "ns",
            "range": "± 1735.6604325990825"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1797671.1363636365,
            "unit": "ns",
            "range": "± 82047.20498865485"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3436853.8695652173,
            "unit": "ns",
            "range": "± 83804.23628872682"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2361024.9166666665,
            "unit": "ns",
            "range": "± 109414.11690502115"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6286279.8125,
            "unit": "ns",
            "range": "± 87272.68151964374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7207648.988541666,
            "unit": "ns",
            "range": "± 33578.49264184255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2256785.9299665177,
            "unit": "ns",
            "range": "± 6522.860272191545"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1644556.1459635417,
            "unit": "ns",
            "range": "± 4953.749157351108"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3159610.4505208335,
            "unit": "ns",
            "range": "± 11468.6974412281"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 995706.5327524039,
            "unit": "ns",
            "range": "± 500.95758201190625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 917713.8228934152,
            "unit": "ns",
            "range": "± 680.1215204792293"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4471549.22368421,
            "unit": "ns",
            "range": "± 225941.68100207325"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4646996.466666667,
            "unit": "ns",
            "range": "± 64148.45514659911"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5553834.928571428,
            "unit": "ns",
            "range": "± 46165.50040629622"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5075551.4375,
            "unit": "ns",
            "range": "± 147829.38725478435"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8303197.205882353,
            "unit": "ns",
            "range": "± 235817.36212236423"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10784287.4,
            "unit": "ns",
            "range": "± 170031.09503213986"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27600632.066666666,
            "unit": "ns",
            "range": "± 195524.2723699054"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68458673,
            "unit": "ns",
            "range": "± 157184.75173820136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137799419.33333334,
            "unit": "ns",
            "range": "± 440981.9708304583"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 272049944.73333335,
            "unit": "ns",
            "range": "± 537745.2034242434"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58631.09375,
            "unit": "ns",
            "range": "± 5022.901181123211"
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
          "id": "b5b06964502c9e20c320ae2620b0874770d608aa",
          "message": "Changelog",
          "timestamp": "2023-07-07T16:55:12+09:00",
          "tree_id": "5fbeb27ab23662e211cb6e2b3e02fc25efac6354",
          "url": "https://github.com/greymistcube/libplanet/commit/b5b06964502c9e20c320ae2620b0874770d608aa"
        },
        "date": 1688717396251,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 302560.76923076925,
            "unit": "ns",
            "range": "± 12437.886094297575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 287680.5813953488,
            "unit": "ns",
            "range": "± 10445.526867271163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 256477.5,
            "unit": "ns",
            "range": "± 13868.558619494419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4593345.384615385,
            "unit": "ns",
            "range": "± 36431.654028556135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4263606.153846154,
            "unit": "ns",
            "range": "± 47613.98543468462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23122.870967741936,
            "unit": "ns",
            "range": "± 3042.9104139815763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100588.4947368421,
            "unit": "ns",
            "range": "± 11185.980294379595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81264.125,
            "unit": "ns",
            "range": "± 7198.944026670712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102657.69473684211,
            "unit": "ns",
            "range": "± 15199.268644970825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6322.752808988764,
            "unit": "ns",
            "range": "± 909.5825126359655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20855.252747252747,
            "unit": "ns",
            "range": "± 1851.5962218427558"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1508402.9894736842,
            "unit": "ns",
            "range": "± 83663.85533198029"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2872436.7708333335,
            "unit": "ns",
            "range": "± 113125.89504077373"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1966467.707070707,
            "unit": "ns",
            "range": "± 114356.16508373398"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5500058.396825396,
            "unit": "ns",
            "range": "± 249769.93199817356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6236737.411057692,
            "unit": "ns",
            "range": "± 48666.46260169393"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1941497.4716796875,
            "unit": "ns",
            "range": "± 1212.211938988378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1393639.1173177084,
            "unit": "ns",
            "range": "± 2536.640128193922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2686115.844050481,
            "unit": "ns",
            "range": "± 6536.691318710607"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 848455.6979417067,
            "unit": "ns",
            "range": "± 848.1006433071349"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 769689.3081380208,
            "unit": "ns",
            "range": "± 318.1702993424309"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3661949.5846153847,
            "unit": "ns",
            "range": "± 169998.69364965832"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3906244.2285714285,
            "unit": "ns",
            "range": "± 126542.17822832728"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4679215.463414635,
            "unit": "ns",
            "range": "± 159250.81249951245"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4180922.9821428573,
            "unit": "ns",
            "range": "± 167446.94421626005"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7030735.911764706,
            "unit": "ns",
            "range": "± 225031.47106037865"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8125779.923076923,
            "unit": "ns",
            "range": "± 126976.43179836008"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23146769.066666666,
            "unit": "ns",
            "range": "± 429761.14060328685"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57515805.53333333,
            "unit": "ns",
            "range": "± 522388.2697710674"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117406525.46666667,
            "unit": "ns",
            "range": "± 1005536.2698612165"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229247623.13333333,
            "unit": "ns",
            "range": "± 1283036.4889381898"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52559.92222222222,
            "unit": "ns",
            "range": "± 4737.446785987408"
          }
        ]
      }
    ]
  }
}