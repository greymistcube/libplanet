window.BENCHMARK_DATA = {
  "lastUpdate": 1702894135979,
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
          "id": "20a83c7e16aa91de2331c52fadddcf7473abc4e5",
          "message": "Removed updated addresses from IRichStore",
          "timestamp": "2023-12-18T18:50:02+09:00",
          "tree_id": "4c182bfa4a5a7e0262c2321d7e3df1f7ed1be87e",
          "url": "https://github.com/greymistcube/libplanet/commit/20a83c7e16aa91de2331c52fadddcf7473abc4e5"
        },
        "date": 1702893742933,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 952655.4347826086,
            "unit": "ns",
            "range": "± 97222.3263420976"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1725469.512195122,
            "unit": "ns",
            "range": "± 91244.2410684322"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1327548.9795918367,
            "unit": "ns",
            "range": "± 135694.10963892503"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5162639.393939394,
            "unit": "ns",
            "range": "± 157908.22085034466"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34163.2183908046,
            "unit": "ns",
            "range": "± 2144.8757183342127"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5014100,
            "unit": "ns",
            "range": "± 19518.275459760192"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13381626.666666666,
            "unit": "ns",
            "range": "± 132664.45032845982"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32160607.14285714,
            "unit": "ns",
            "range": "± 323332.40508155717"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63971233.333333336,
            "unit": "ns",
            "range": "± 626177.4128639202"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129656264.28571428,
            "unit": "ns",
            "range": "± 923272.9878886499"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3313465.4947916665,
            "unit": "ns",
            "range": "± 6399.347860739238"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1065719.810267857,
            "unit": "ns",
            "range": "± 2845.3375375966757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 733849.3791852678,
            "unit": "ns",
            "range": "± 1664.8532186984432"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1942945.9765625,
            "unit": "ns",
            "range": "± 5766.351987462463"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 659626.6741071428,
            "unit": "ns",
            "range": "± 2168.7431120063193"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 558121.2890625,
            "unit": "ns",
            "range": "± 750.4751943451861"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2068545.945945946,
            "unit": "ns",
            "range": "± 34798.52004032638"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2266330,
            "unit": "ns",
            "range": "± 75009.9043032968"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2826674.074074074,
            "unit": "ns",
            "range": "± 78992.3296792046"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2626703.7735849055,
            "unit": "ns",
            "range": "± 108721.95476087002"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6264525.396825396,
            "unit": "ns",
            "range": "± 285283.492827892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173960.65573770492,
            "unit": "ns",
            "range": "± 7606.253538778132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 162389.33333333334,
            "unit": "ns",
            "range": "± 8178.4418877749395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 139205,
            "unit": "ns",
            "range": "± 3852.6680731736133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2784271.4285714286,
            "unit": "ns",
            "range": "± 41846.09950707526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2505858.8235294116,
            "unit": "ns",
            "range": "± 49967.527690785464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11589.130434782608,
            "unit": "ns",
            "range": "± 1390.82207659135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51801.07526881721,
            "unit": "ns",
            "range": "± 3735.478975855122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43836.95652173913,
            "unit": "ns",
            "range": "± 1609.7423804450718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61775.510204081635,
            "unit": "ns",
            "range": "± 13297.957840461779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2652.577319587629,
            "unit": "ns",
            "range": "± 574.2917347164018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11029.545454545454,
            "unit": "ns",
            "range": "± 979.8145603239316"
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
          "id": "17212c88836ceabcca159fcfb0030f387d8f33a7",
          "message": "Removed unnecessary arguments",
          "timestamp": "2023-12-18T18:53:58+09:00",
          "tree_id": "b579df8e713644622da9eabfc1fc07917f64f9a8",
          "url": "https://github.com/greymistcube/libplanet/commit/17212c88836ceabcca159fcfb0030f387d8f33a7"
        },
        "date": 1702893941621,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 924361.8556701031,
            "unit": "ns",
            "range": "± 99071.38256002062"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1704420.8955223882,
            "unit": "ns",
            "range": "± 78892.54014224019"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1339500,
            "unit": "ns",
            "range": "± 92611.16497910972"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5254061.111111111,
            "unit": "ns",
            "range": "± 172515.0863428269"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34786.666666666664,
            "unit": "ns",
            "range": "± 2470.7820715198295"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5348403.846153846,
            "unit": "ns",
            "range": "± 59784.56622719913"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13679138.461538462,
            "unit": "ns",
            "range": "± 95430.83480075625"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34269150,
            "unit": "ns",
            "range": "± 579149.009323162"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 69402333.33333333,
            "unit": "ns",
            "range": "± 533077.3069997402"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 142835157.14285713,
            "unit": "ns",
            "range": "± 766828.5042596258"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3462274.128605769,
            "unit": "ns",
            "range": "± 13476.301564836722"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1051462.3177083333,
            "unit": "ns",
            "range": "± 2965.028515884385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 756134.9834735577,
            "unit": "ns",
            "range": "± 1095.7029865766422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1914424.9720982143,
            "unit": "ns",
            "range": "± 4699.508097364429"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 607822.9910714285,
            "unit": "ns",
            "range": "± 1184.054046689458"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 560078.26171875,
            "unit": "ns",
            "range": "± 984.4638435252263"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2365051.724137931,
            "unit": "ns",
            "range": "± 128604.40863909524"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2433858.8235294116,
            "unit": "ns",
            "range": "± 56312.23623768751"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2976550,
            "unit": "ns",
            "range": "± 69827.10791662504"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2807303.3333333335,
            "unit": "ns",
            "range": "± 120364.83940491822"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6341190.322580645,
            "unit": "ns",
            "range": "± 193663.9414980474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 185522.35294117648,
            "unit": "ns",
            "range": "± 9954.053690529781"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 177263.2911392405,
            "unit": "ns",
            "range": "± 8008.812089243819"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144592,
            "unit": "ns",
            "range": "± 5657.858540588137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2777787.5,
            "unit": "ns",
            "range": "± 54497.337855470825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2582483.3333333335,
            "unit": "ns",
            "range": "± 26713.738216951395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13302.105263157895,
            "unit": "ns",
            "range": "± 2008.8622241483617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57392.13483146067,
            "unit": "ns",
            "range": "± 4378.906690007874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48108.51063829787,
            "unit": "ns",
            "range": "± 3601.9307717989036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67342.85714285714,
            "unit": "ns",
            "range": "± 14917.491290151725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2607.216494845361,
            "unit": "ns",
            "range": "± 592.0035583156736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11400,
            "unit": "ns",
            "range": "± 1432.4962319480826"
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
          "id": "35a35f847e003ae3e4102cc9a81797f633097d07",
          "message": "Changelog",
          "timestamp": "2023-12-18T18:56:37+09:00",
          "tree_id": "9fc809af09fa515759b8076fcff9f46aa92a3c88",
          "url": "https://github.com/greymistcube/libplanet/commit/35a35f847e003ae3e4102cc9a81797f633097d07"
        },
        "date": 1702894117029,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1051077.894736842,
            "unit": "ns",
            "range": "± 103883.86025294127"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1855864.6153846155,
            "unit": "ns",
            "range": "± 73656.48399574462"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1481689.6907216494,
            "unit": "ns",
            "range": "± 128921.2231078021"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5536524.137931035,
            "unit": "ns",
            "range": "± 242312.28242529536"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37943.47826086957,
            "unit": "ns",
            "range": "± 3123.2662653634547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5274626.666666667,
            "unit": "ns",
            "range": "± 41128.361202922926"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14351928.57142857,
            "unit": "ns",
            "range": "± 120652.38164993758"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34440792.85714286,
            "unit": "ns",
            "range": "± 266910.9458639305"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 70087114.28571428,
            "unit": "ns",
            "range": "± 332415.2358286079"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 137737421.42857143,
            "unit": "ns",
            "range": "± 773650.2133279727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3358644.9348958335,
            "unit": "ns",
            "range": "± 7807.244557489546"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1057843.6458333333,
            "unit": "ns",
            "range": "± 1495.9141913551837"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 731438.3951822916,
            "unit": "ns",
            "range": "± 518.1542255603499"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1938263.5463169643,
            "unit": "ns",
            "range": "± 4066.703967345015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622382.1428571428,
            "unit": "ns",
            "range": "± 2216.9748149715874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571141.9986979166,
            "unit": "ns",
            "range": "± 1678.682907847328"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2291518.2795698927,
            "unit": "ns",
            "range": "± 145460.429361567"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2401596.153846154,
            "unit": "ns",
            "range": "± 58644.12318907483"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2928990,
            "unit": "ns",
            "range": "± 57602.4204535301"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2796418.085106383,
            "unit": "ns",
            "range": "± 107808.30835608773"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6360985.185185186,
            "unit": "ns",
            "range": "± 178283.8072454308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 189328.30188679244,
            "unit": "ns",
            "range": "± 5989.361637953471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 180480.98591549296,
            "unit": "ns",
            "range": "± 8796.940889541347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 149992,
            "unit": "ns",
            "range": "± 6055.4273177043415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2856884.6153846155,
            "unit": "ns",
            "range": "± 31233.49820715589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2640737.5,
            "unit": "ns",
            "range": "± 51100.72243455403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14098.888888888889,
            "unit": "ns",
            "range": "± 1494.8972716157268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65478.72340425532,
            "unit": "ns",
            "range": "± 6255.696283163712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59688.04347826087,
            "unit": "ns",
            "range": "± 5711.369851489784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 73532.29166666667,
            "unit": "ns",
            "range": "± 16318.336439927529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3626.0416666666665,
            "unit": "ns",
            "range": "± 913.66754193907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13566.304347826086,
            "unit": "ns",
            "range": "± 1732.4490176228005"
          }
        ]
      }
    ]
  }
}