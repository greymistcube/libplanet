window.BENCHMARK_DATA = {
  "lastUpdate": 1691562971916,
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
      }
    ]
  }
}