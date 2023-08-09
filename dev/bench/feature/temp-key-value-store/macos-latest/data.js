window.BENCHMARK_DATA = {
  "lastUpdate": 1691546920110,
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
      }
    ]
  }
}