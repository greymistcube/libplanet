window.BENCHMARK_DATA = {
  "lastUpdate": 1703577844034,
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
      }
    ]
  }
}