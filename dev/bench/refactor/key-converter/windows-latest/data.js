window.BENCHMARK_DATA = {
  "lastUpdate": 1703578078600,
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
          "id": "51f28a52208cc2bfcbe7a0d6febb960fe6182be0",
          "message": "Changed ToFungibleAssetKey to use HashDigest<SHA1> instead of Currency",
          "timestamp": "2023-12-26T16:51:54+09:00",
          "tree_id": "9787d59da4c1f7b2100d5578dd7adcebde331705",
          "url": "https://github.com/greymistcube/libplanet/commit/51f28a52208cc2bfcbe7a0d6febb960fe6182be0"
        },
        "date": 1703577826749,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1048901.030927835,
            "unit": "ns",
            "range": "± 128376.81230045445"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1805063.4615384615,
            "unit": "ns",
            "range": "± 69989.397036885"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1455378.7878787878,
            "unit": "ns",
            "range": "± 177223.25725705834"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5244797.5,
            "unit": "ns",
            "range": "± 185939.23668010335"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35992.307692307695,
            "unit": "ns",
            "range": "± 2988.207592418006"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5222230.769230769,
            "unit": "ns",
            "range": "± 32211.498583978377"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13748535.714285715,
            "unit": "ns",
            "range": "± 122622.48261129865"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34048221.428571425,
            "unit": "ns",
            "range": "± 399017.1659669089"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 69382533.33333333,
            "unit": "ns",
            "range": "± 438389.0667084705"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 137586853.33333334,
            "unit": "ns",
            "range": "± 1715830.6584220228"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3369693.917410714,
            "unit": "ns",
            "range": "± 12799.403494648732"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1066225.3092447917,
            "unit": "ns",
            "range": "± 1189.441539895712"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 748882.8683035715,
            "unit": "ns",
            "range": "± 3491.655462033053"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1968559.765625,
            "unit": "ns",
            "range": "± 3558.3451234382455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 631924.9930245535,
            "unit": "ns",
            "range": "± 3664.756017473742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 560573.8002232143,
            "unit": "ns",
            "range": "± 937.9585173274407"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2224680,
            "unit": "ns",
            "range": "± 92474.3275685704"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2379884.210526316,
            "unit": "ns",
            "range": "± 70798.0283979403"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2873765,
            "unit": "ns",
            "range": "± 64394.698008290616"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2723450.8474576273,
            "unit": "ns",
            "range": "± 108180.02775208483"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6175603.846153846,
            "unit": "ns",
            "range": "± 165527.93233957642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 183830.30303030304,
            "unit": "ns",
            "range": "± 5833.335497835095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 175163.76811594202,
            "unit": "ns",
            "range": "± 8357.366792844796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146815.7894736842,
            "unit": "ns",
            "range": "± 4982.267274818167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2823046.6666666665,
            "unit": "ns",
            "range": "± 39815.159831161705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2612066.6666666665,
            "unit": "ns",
            "range": "± 40377.21540435303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13067.777777777777,
            "unit": "ns",
            "range": "± 1629.5603444961948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61858.94736842105,
            "unit": "ns",
            "range": "± 6025.274686716942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49147.77777777778,
            "unit": "ns",
            "range": "± 2975.942029223415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 71332.82828282828,
            "unit": "ns",
            "range": "± 15115.70368992595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3096.7391304347825,
            "unit": "ns",
            "range": "± 592.5269200462163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12459.34065934066,
            "unit": "ns",
            "range": "± 1610.6574242269328"
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
          "id": "025dd07c5c37809a2fff094dbd20b3805b2cc202",
          "message": "Changed ToFungibleAssetKey to use HashDigest<SHA1> instead of Currency",
          "timestamp": "2023-12-26T16:55:44+09:00",
          "tree_id": "10f058436a3f7fa136239cc7f74c114f8bc3fc73",
          "url": "https://github.com/greymistcube/libplanet/commit/025dd07c5c37809a2fff094dbd20b3805b2cc202"
        },
        "date": 1703578057792,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 927317.1717171717,
            "unit": "ns",
            "range": "± 95533.56824335072"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1677957.7464788733,
            "unit": "ns",
            "range": "± 77821.37727233682"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1279922,
            "unit": "ns",
            "range": "± 111071.27075836842"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5137338.888888889,
            "unit": "ns",
            "range": "± 168848.81788625973"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34207.142857142855,
            "unit": "ns",
            "range": "± 1678.5364077224208"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5147207.142857143,
            "unit": "ns",
            "range": "± 13194.956162559547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13275458.333333334,
            "unit": "ns",
            "range": "± 76644.36714561295"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31772207.14285714,
            "unit": "ns",
            "range": "± 389122.05019126704"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65090426.666666664,
            "unit": "ns",
            "range": "± 380343.9504799132"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130345900,
            "unit": "ns",
            "range": "± 463678.9323526489"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3319108.2552083335,
            "unit": "ns",
            "range": "± 21656.13570497877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1054068.666294643,
            "unit": "ns",
            "range": "± 3038.1657480598906"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 740612.2000558035,
            "unit": "ns",
            "range": "± 1364.9282976217446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1952675.6138392857,
            "unit": "ns",
            "range": "± 8110.5608942606295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 613955.7826450893,
            "unit": "ns",
            "range": "± 1897.9621221707846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 555055.8854166666,
            "unit": "ns",
            "range": "± 971.0822159401091"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2102564.285714286,
            "unit": "ns",
            "range": "± 56718.91848656596"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2238571.052631579,
            "unit": "ns",
            "range": "± 113384.85238724438"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2761251.6129032257,
            "unit": "ns",
            "range": "± 82181.65598626717"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2654230.882352941,
            "unit": "ns",
            "range": "± 125601.97647621721"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6328377.2727272725,
            "unit": "ns",
            "range": "± 347907.3372891163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 167248.80952380953,
            "unit": "ns",
            "range": "± 8766.179451742315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 161470.1754385965,
            "unit": "ns",
            "range": "± 6381.053565950439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142006.89655172414,
            "unit": "ns",
            "range": "± 4062.628550448128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2665114.285714286,
            "unit": "ns",
            "range": "± 42568.92794484759"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2462921.4285714286,
            "unit": "ns",
            "range": "± 26040.59489369593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9655.913978494624,
            "unit": "ns",
            "range": "± 930.5751337083915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51255.208333333336,
            "unit": "ns",
            "range": "± 5221.793799304616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43426.92307692308,
            "unit": "ns",
            "range": "± 2111.3590795592213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 47212.244897959186,
            "unit": "ns",
            "range": "± 8680.102442577132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2382.4742268041236,
            "unit": "ns",
            "range": "± 395.81411601026764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8838.888888888889,
            "unit": "ns",
            "range": "± 783.3512628436564"
          }
        ]
      }
    ]
  }
}