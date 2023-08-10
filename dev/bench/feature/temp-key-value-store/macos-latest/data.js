window.BENCHMARK_DATA = {
  "lastUpdate": 1691673862515,
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
          "id": "ae0f3da3ac07efbffebd8dc2c11ab98ef661ecad",
          "message": "Introduce VolatileKeyValueStore",
          "timestamp": "2023-08-09T10:33:47+09:00",
          "tree_id": "aa74d09cc1962bc9aba5f59caea5d7aec8790c9e",
          "url": "https://github.com/greymistcube/libplanet/commit/ae0f3da3ac07efbffebd8dc2c11ab98ef661ecad"
        },
        "date": 1691546888061,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8752040.5,
            "unit": "ns",
            "range": "± 92661.87954373105"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23210458.633333333,
            "unit": "ns",
            "range": "± 141057.17642039785"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56040513.43478261,
            "unit": "ns",
            "range": "± 1394829.403117581"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112195091.79166667,
            "unit": "ns",
            "range": "± 2867663.392075271"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222044918.69230768,
            "unit": "ns",
            "range": "± 2083092.4867164998"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67494.19318181818,
            "unit": "ns",
            "range": "± 6120.449169073897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 375252.97540983604,
            "unit": "ns",
            "range": "± 15718.343258336266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 380250.0595238095,
            "unit": "ns",
            "range": "± 20377.593487598377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 317038.6842105263,
            "unit": "ns",
            "range": "± 10814.642591600903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4746036.571428572,
            "unit": "ns",
            "range": "± 133130.2549436644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4293651.071428572,
            "unit": "ns",
            "range": "± 56395.5706436709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21638.044943820223,
            "unit": "ns",
            "range": "± 2363.839292867126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105086.9696969697,
            "unit": "ns",
            "range": "± 8802.610531685572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 107311.85858585859,
            "unit": "ns",
            "range": "± 9926.168319669488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127086.5625,
            "unit": "ns",
            "range": "± 14707.176998296121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6951.860824742268,
            "unit": "ns",
            "range": "± 738.6584571816527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19650.641304347828,
            "unit": "ns",
            "range": "± 2007.732555093107"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1707351.4065934066,
            "unit": "ns",
            "range": "± 168446.09983262225"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3397778.72,
            "unit": "ns",
            "range": "± 151557.1115978396"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2326638.0786516853,
            "unit": "ns",
            "range": "± 278783.00289558974"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6655860.771739131,
            "unit": "ns",
            "range": "± 432258.52872662136"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3760374.1341463416,
            "unit": "ns",
            "range": "± 134514.80932201407"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3969254.3731343285,
            "unit": "ns",
            "range": "± 187431.5670532998"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5190302.00877193,
            "unit": "ns",
            "range": "± 222428.78223025217"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4554082.394366197,
            "unit": "ns",
            "range": "± 222338.2382644887"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8356982.7450980395,
            "unit": "ns",
            "range": "± 335747.4797177095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7346715.319196428,
            "unit": "ns",
            "range": "± 35509.920086512284"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2271547.8883928573,
            "unit": "ns",
            "range": "± 16115.296976372207"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1472353.2388020833,
            "unit": "ns",
            "range": "± 17247.779991954536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2904708.3800223214,
            "unit": "ns",
            "range": "± 14447.154216282877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1021329.5971354167,
            "unit": "ns",
            "range": "± 8624.272000694842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 929741.5376302083,
            "unit": "ns",
            "range": "± 10328.364905663144"
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
          "id": "7f442c257e57b2f39823cc9d3451e7f4a6311ccd",
          "message": "Added tests; fixed bugs",
          "timestamp": "2023-08-09T15:14:23+09:00",
          "tree_id": "aafba74cc26be41ac4d68dcb7c5ab229efaf26b1",
          "url": "https://github.com/greymistcube/libplanet/commit/7f442c257e57b2f39823cc9d3451e7f4a6311ccd"
        },
        "date": 1691562943528,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8717799.289473685,
            "unit": "ns",
            "range": "± 192591.04956057048"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22008551.5,
            "unit": "ns",
            "range": "± 390363.16532285034"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52743524.416666664,
            "unit": "ns",
            "range": "± 684604.8154007548"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105489592,
            "unit": "ns",
            "range": "± 737996.0402879318"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221339984.14285713,
            "unit": "ns",
            "range": "± 2571691.6201314353"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 78989.87078651685,
            "unit": "ns",
            "range": "± 6078.907937551594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 347220.34210526315,
            "unit": "ns",
            "range": "± 32005.613737086347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 337873.7021276596,
            "unit": "ns",
            "range": "± 25913.797307499906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 324127.86363636365,
            "unit": "ns",
            "range": "± 10934.022595573295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4324982.714285715,
            "unit": "ns",
            "range": "± 101157.90522946927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3874834.409090909,
            "unit": "ns",
            "range": "± 93243.23287786171"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24311.255102040817,
            "unit": "ns",
            "range": "± 4685.246322147908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 115052.68041237113,
            "unit": "ns",
            "range": "± 14311.23667317223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 118685.21578947369,
            "unit": "ns",
            "range": "± 7082.512729766268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 131182.8144329897,
            "unit": "ns",
            "range": "± 17680.743813497767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7843.9639175257735,
            "unit": "ns",
            "range": "± 1889.772594684872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24546.747368421053,
            "unit": "ns",
            "range": "± 3531.0767026757103"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1639970.1262626264,
            "unit": "ns",
            "range": "± 190734.82794507264"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3033037.975,
            "unit": "ns",
            "range": "± 157376.5255875201"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2175730.7473118277,
            "unit": "ns",
            "range": "± 242561.17069665468"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5952881.552238806,
            "unit": "ns",
            "range": "± 280997.0088047571"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3472532.466666667,
            "unit": "ns",
            "range": "± 63885.49241513138"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3624659.3061224488,
            "unit": "ns",
            "range": "± 142191.53023214324"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4588734.863636363,
            "unit": "ns",
            "range": "± 154099.71659234626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4086770.6363636362,
            "unit": "ns",
            "range": "± 166485.86017619053"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7098291.4772727275,
            "unit": "ns",
            "range": "± 240200.87137745324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7097080.5234375,
            "unit": "ns",
            "range": "± 129784.02529798291"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2029421.1729266827,
            "unit": "ns",
            "range": "± 19891.54195362553"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1338885.27734375,
            "unit": "ns",
            "range": "± 23909.317217748176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3136910.557154605,
            "unit": "ns",
            "range": "± 107027.05024623455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 808674.4728515625,
            "unit": "ns",
            "range": "± 10579.015205025034"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 818161.4007703993,
            "unit": "ns",
            "range": "± 14882.239031899651"
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
          "id": "6b5ed745979df2ba815f426aef8b401bfb80b04c",
          "message": "Added tests; fixed bugs",
          "timestamp": "2023-08-09T18:48:20+09:00",
          "tree_id": "dd96494b87d086b4c271242141d8b87d1de38297",
          "url": "https://github.com/greymistcube/libplanet/commit/6b5ed745979df2ba815f426aef8b401bfb80b04c"
        },
        "date": 1691575545926,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9921696.837837838,
            "unit": "ns",
            "range": "± 470595.7516204393"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21716712.727272727,
            "unit": "ns",
            "range": "± 511966.16791187914"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55161177.47058824,
            "unit": "ns",
            "range": "± 1815302.4941270624"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110265756.42857143,
            "unit": "ns",
            "range": "± 3110476.5197712183"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 228739618.79411766,
            "unit": "ns",
            "range": "± 4574097.755656665"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68111.33333333333,
            "unit": "ns",
            "range": "± 11831.989471603682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 369409.5229885057,
            "unit": "ns",
            "range": "± 53522.002087161025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 326083.4285714286,
            "unit": "ns",
            "range": "± 20155.17315680896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 296981.4464285714,
            "unit": "ns",
            "range": "± 12720.308756143597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4117109.1481481483,
            "unit": "ns",
            "range": "± 111706.92253106709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3677498.0689655175,
            "unit": "ns",
            "range": "± 107819.88824156536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22742.164948453606,
            "unit": "ns",
            "range": "± 2953.9600562931214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94062.64583333333,
            "unit": "ns",
            "range": "± 11460.029805214448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92001.84042553192,
            "unit": "ns",
            "range": "± 8685.502258031032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115610.87078651685,
            "unit": "ns",
            "range": "± 8269.933996359154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6355.164948453608,
            "unit": "ns",
            "range": "± 1294.9403757220862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19435.897959183672,
            "unit": "ns",
            "range": "± 3221.8793564344514"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1598120.2857142857,
            "unit": "ns",
            "range": "± 169097.29158559616"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2988815.7701149425,
            "unit": "ns",
            "range": "± 162519.93306473253"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2161979.0322580645,
            "unit": "ns",
            "range": "± 183419.6584264959"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6117906.5,
            "unit": "ns",
            "range": "± 422548.3683853623"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3669631.952631579,
            "unit": "ns",
            "range": "± 381441.0969229765"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3639326.1063829786,
            "unit": "ns",
            "range": "± 241834.131521465"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4736349,
            "unit": "ns",
            "range": "± 226566.71646779895"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4426217.833333333,
            "unit": "ns",
            "range": "± 78102.96189249773"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7408873.392473118,
            "unit": "ns",
            "range": "± 522928.4744896111"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6786371.095853365,
            "unit": "ns",
            "range": "± 77526.44079156048"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2037421.76484375,
            "unit": "ns",
            "range": "± 42035.606964175815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1336056.851495151,
            "unit": "ns",
            "range": "± 38849.72368635073"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2780888.4176136362,
            "unit": "ns",
            "range": "± 61280.76964589029"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 799302.3382393973,
            "unit": "ns",
            "range": "± 7023.136206102618"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 789475.2840221775,
            "unit": "ns",
            "range": "± 22594.440092122262"
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
          "id": "4e820394c7e12fa4894d1d9ba1994719a89136e7",
          "message": "Changelog",
          "timestamp": "2023-08-09T18:52:16+09:00",
          "tree_id": "165b4ad369419c8aba771d844298efbc31b64d6b",
          "url": "https://github.com/greymistcube/libplanet/commit/4e820394c7e12fa4894d1d9ba1994719a89136e7"
        },
        "date": 1691575807722,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8985436.394366197,
            "unit": "ns",
            "range": "± 440630.3499699194"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22034088.94117647,
            "unit": "ns",
            "range": "± 849299.3509994557"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53393664.59836066,
            "unit": "ns",
            "range": "± 2320171.8361595813"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105024266.94444445,
            "unit": "ns",
            "range": "± 3972502.687756048"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216923115.69230768,
            "unit": "ns",
            "range": "± 3578546.0870461618"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70657.22631578948,
            "unit": "ns",
            "range": "± 12121.222944446692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 328612.2105263158,
            "unit": "ns",
            "range": "± 25846.32395726989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 366242.6222222222,
            "unit": "ns",
            "range": "± 83519.57602681169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 307025.5909090909,
            "unit": "ns",
            "range": "± 12951.174600344924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4055309,
            "unit": "ns",
            "range": "± 65348.40868376215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3744983.5789473685,
            "unit": "ns",
            "range": "± 83078.36364696473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18543.404494382023,
            "unit": "ns",
            "range": "± 2527.7271668397225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99755.16666666667,
            "unit": "ns",
            "range": "± 13407.158684822074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 116784.11458333333,
            "unit": "ns",
            "range": "± 15973.665709450002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100104.91489361702,
            "unit": "ns",
            "range": "± 14004.763915013336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7234.4631578947365,
            "unit": "ns",
            "range": "± 935.355431481898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17335.87777777778,
            "unit": "ns",
            "range": "± 2095.6495430691157"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1521475.694736842,
            "unit": "ns",
            "range": "± 109499.70061059564"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2894307.285714286,
            "unit": "ns",
            "range": "± 111515.82762807794"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1987796.2857142857,
            "unit": "ns",
            "range": "± 145259.103228977"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5935372.542553191,
            "unit": "ns",
            "range": "± 399702.0888737257"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3489168.3645833335,
            "unit": "ns",
            "range": "± 282387.6059132803"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3725402.6770833335,
            "unit": "ns",
            "range": "± 254748.91109959912"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4580941.615384615,
            "unit": "ns",
            "range": "± 234169.10510342958"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3987217.287234043,
            "unit": "ns",
            "range": "± 245244.28314996295"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7585828.228260869,
            "unit": "ns",
            "range": "± 476663.0539329932"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6264240.747944079,
            "unit": "ns",
            "range": "± 120443.60926612742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1915015.9548177083,
            "unit": "ns",
            "range": "± 21036.962556417988"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1273554.352734375,
            "unit": "ns",
            "range": "± 18726.551310864394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2566985.01953125,
            "unit": "ns",
            "range": "± 26654.4427281152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 802553.242327009,
            "unit": "ns",
            "range": "± 13764.651008312423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 775700.0341796875,
            "unit": "ns",
            "range": "± 10023.341193140843"
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
          "id": "03a96f56214f40111180a6b6ea7992b770d67475",
          "message": "Changelog",
          "timestamp": "2023-08-10T13:51:40+09:00",
          "tree_id": "fb25148da6dae328e22b79b77d86241dac0b9f1a",
          "url": "https://github.com/greymistcube/libplanet/commit/03a96f56214f40111180a6b6ea7992b770d67475"
        },
        "date": 1691644304490,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8045634.668831169,
            "unit": "ns",
            "range": "± 412372.2650561468"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21388894.306818184,
            "unit": "ns",
            "range": "± 1884288.6417705433"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51754740.92553192,
            "unit": "ns",
            "range": "± 4800379.38642164"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 128214670.84,
            "unit": "ns",
            "range": "± 17776076.589954037"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 241766271.16,
            "unit": "ns",
            "range": "± 26820237.996295452"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58539.18947368421,
            "unit": "ns",
            "range": "± 7217.789190154077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 377823.8595505618,
            "unit": "ns",
            "range": "± 75954.36688748281"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 380623.1041666667,
            "unit": "ns",
            "range": "± 71482.38931542277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 352613.1777777778,
            "unit": "ns",
            "range": "± 47606.313518974726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4783747.907216495,
            "unit": "ns",
            "range": "± 1032229.4444748493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3998117.0736842104,
            "unit": "ns",
            "range": "± 476044.48467380175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17619.682795698925,
            "unit": "ns",
            "range": "± 1852.5218413676728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96354.12244897959,
            "unit": "ns",
            "range": "± 15437.194787677156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83701.3762886598,
            "unit": "ns",
            "range": "± 12802.789240579676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99803.47938144329,
            "unit": "ns",
            "range": "± 16314.498886457935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6795.505154639175,
            "unit": "ns",
            "range": "± 1560.0198524625637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16999.203296703297,
            "unit": "ns",
            "range": "± 2035.608112767973"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1509695.1129032257,
            "unit": "ns",
            "range": "± 132130.32918354846"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2922943.5208333335,
            "unit": "ns",
            "range": "± 356161.62285208545"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2032864.5,
            "unit": "ns",
            "range": "± 253023.3802850965"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5564719.75,
            "unit": "ns",
            "range": "± 437588.08181940624"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4544615.66,
            "unit": "ns",
            "range": "± 884060.087801057"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4663393.71,
            "unit": "ns",
            "range": "± 1069011.1283659344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5115926.98,
            "unit": "ns",
            "range": "± 1077150.6883583833"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4542370.09,
            "unit": "ns",
            "range": "± 797656.8630751766"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8713158.86597938,
            "unit": "ns",
            "range": "± 1397054.2459339565"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6754182.82078125,
            "unit": "ns",
            "range": "± 1043987.7752970097"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1665204.24953125,
            "unit": "ns",
            "range": "± 100262.37471759995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1009378.9115149457,
            "unit": "ns",
            "range": "± 21976.388171249724"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2427649.071707589,
            "unit": "ns",
            "range": "± 35099.87609024674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 759429.6409505209,
            "unit": "ns",
            "range": "± 10176.310443331957"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 724351.183984375,
            "unit": "ns",
            "range": "± 16053.56466643544"
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
          "id": "8462329db89fac815ba092ae9c627bf018368e1f",
          "message": "Changelog",
          "timestamp": "2023-08-10T22:00:36+09:00",
          "tree_id": "9d081c2db32d067f7aaf71f3104d9d3b30894556",
          "url": "https://github.com/greymistcube/libplanet/commit/8462329db89fac815ba092ae9c627bf018368e1f"
        },
        "date": 1691673558377,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8081342.40625,
            "unit": "ns",
            "range": "± 248244.20663322372"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21074965.84,
            "unit": "ns",
            "range": "± 842141.3105317584"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49586016.78571428,
            "unit": "ns",
            "range": "± 582964.1466774883"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107162006.2,
            "unit": "ns",
            "range": "± 2382225.7824487896"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213310544.6,
            "unit": "ns",
            "range": "± 3547433.1514548818"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 79346.2643678161,
            "unit": "ns",
            "range": "± 8955.515209180046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 341956.08762886596,
            "unit": "ns",
            "range": "± 44088.58950117568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 346642.4845360825,
            "unit": "ns",
            "range": "± 46607.97303196306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 315909.2826086957,
            "unit": "ns",
            "range": "± 6392.087018383971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4340450.011111111,
            "unit": "ns",
            "range": "± 241460.12643937272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4173528.530927835,
            "unit": "ns",
            "range": "± 282258.80204235343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18286.565217391304,
            "unit": "ns",
            "range": "± 2208.050282635114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90123.06185567011,
            "unit": "ns",
            "range": "± 11829.866686004287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89762.79166666667,
            "unit": "ns",
            "range": "± 14461.21133451149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86748.20967741935,
            "unit": "ns",
            "range": "± 12562.045730121596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5255.4631578947365,
            "unit": "ns",
            "range": "± 488.6000150348436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16754.936170212764,
            "unit": "ns",
            "range": "± 1343.9266637738756"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1722186.9696969697,
            "unit": "ns",
            "range": "± 238549.00206291655"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3242615.824742268,
            "unit": "ns",
            "range": "± 323948.39198962983"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2041839.7474226805,
            "unit": "ns",
            "range": "± 246412.78767619756"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5915746.891752577,
            "unit": "ns",
            "range": "± 512049.89533566125"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3347134.535714286,
            "unit": "ns",
            "range": "± 95827.25663921867"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3425573.111111111,
            "unit": "ns",
            "range": "± 125511.96190298906"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4422690.754237288,
            "unit": "ns",
            "range": "± 195757.79166996962"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3868004.880952381,
            "unit": "ns",
            "range": "± 207494.67847160288"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7089537.271739131,
            "unit": "ns",
            "range": "± 441515.83961416385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6171562.253432766,
            "unit": "ns",
            "range": "± 376123.8860756702"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1707119.8523615056,
            "unit": "ns",
            "range": "± 41691.63625712629"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1055529.4181985294,
            "unit": "ns",
            "range": "± 17887.933014466184"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2995718.073828125,
            "unit": "ns",
            "range": "± 51867.73486078043"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 922735.3557942709,
            "unit": "ns",
            "range": "± 12117.15243653316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 817285.7217324746,
            "unit": "ns",
            "range": "± 25748.938962176686"
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
          "id": "69b6177f6a0154fe33008a3ff505e2a0b7478b4b",
          "message": "Read only state root from BlockChainStates",
          "timestamp": "2023-08-10T22:04:32+09:00",
          "tree_id": "6479af23e49ccc90d3203d5aa9c5eeb97fceab47",
          "url": "https://github.com/greymistcube/libplanet/commit/69b6177f6a0154fe33008a3ff505e2a0b7478b4b"
        },
        "date": 1691673846010,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8700714.818181818,
            "unit": "ns",
            "range": "± 208580.95558905072"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22315354.39215686,
            "unit": "ns",
            "range": "± 874583.3393722768"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54063064.794117644,
            "unit": "ns",
            "range": "± 1104699.5530878387"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106715370.6,
            "unit": "ns",
            "range": "± 3440623.739374867"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229694225.07692307,
            "unit": "ns",
            "range": "± 3066728.823779595"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74589.57368421053,
            "unit": "ns",
            "range": "± 14721.985829018859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 346018.4032258064,
            "unit": "ns",
            "range": "± 34415.466795962704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 337522.29032258067,
            "unit": "ns",
            "range": "± 38153.95904056543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 309915.3695652174,
            "unit": "ns",
            "range": "± 21320.18721837957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4260911.722222222,
            "unit": "ns",
            "range": "± 116498.8653260469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3926975.628205128,
            "unit": "ns",
            "range": "± 133911.55171628055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23935.645833333332,
            "unit": "ns",
            "range": "± 3994.607862920812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102505.40721649484,
            "unit": "ns",
            "range": "± 15919.615150605398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82265.17894736842,
            "unit": "ns",
            "range": "± 11610.034843331947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115926.58762886598,
            "unit": "ns",
            "range": "± 20913.03141671508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7004.752631578947,
            "unit": "ns",
            "range": "± 784.2938003615446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20302.083333333332,
            "unit": "ns",
            "range": "± 3868.3991511971017"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1664821.8163265307,
            "unit": "ns",
            "range": "± 174136.09302139113"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3106847.547368421,
            "unit": "ns",
            "range": "± 235070.9421995641"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2229997.1340206186,
            "unit": "ns",
            "range": "± 278588.2977200492"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6093180.747368421,
            "unit": "ns",
            "range": "± 521632.255021962"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3573366.6578947366,
            "unit": "ns",
            "range": "± 154190.29378171792"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3734658.9775280897,
            "unit": "ns",
            "range": "± 222163.85670470475"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4610863.841269841,
            "unit": "ns",
            "range": "± 196256.29528314422"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4046984.078125,
            "unit": "ns",
            "range": "± 187456.85841744984"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7556414.29245283,
            "unit": "ns",
            "range": "± 313865.95112130756"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6354889.538345026,
            "unit": "ns",
            "range": "± 423596.3374095366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1779387.508984375,
            "unit": "ns",
            "range": "± 39416.46433677144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1086093.0960867745,
            "unit": "ns",
            "range": "± 46301.02690033123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2553673.2985839844,
            "unit": "ns",
            "range": "± 42679.739617042396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 857132.5672991071,
            "unit": "ns",
            "range": "± 27256.28903357439"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 867291.0723157051,
            "unit": "ns",
            "range": "± 29781.145946113713"
          }
        ]
      }
    ]
  }
}