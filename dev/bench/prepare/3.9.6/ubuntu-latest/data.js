window.BENCHMARK_DATA = {
  "lastUpdate": 1705577575000,
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
          "id": "0544e7ea2b52012d2ccfe0649b91a3e66350c074",
          "message": "Prepare 3.9.6",
          "timestamp": "2024-01-18T20:21:08+09:00",
          "tree_id": "7404f8c95fac3421006e37312490bb01484847f1",
          "url": "https://github.com/greymistcube/libplanet/commit/0544e7ea2b52012d2ccfe0649b91a3e66350c074"
        },
        "date": 1705577568142,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3758557.003125,
            "unit": "ns",
            "range": "± 57029.11762733996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1215022.2936197917,
            "unit": "ns",
            "range": "± 2482.584952516881"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 762292.2684733073,
            "unit": "ns",
            "range": "± 1733.7177138398015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1950747.0813419118,
            "unit": "ns",
            "range": "± 38029.60263190946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 629058.3053588867,
            "unit": "ns",
            "range": "± 11804.675005517443"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 567729.5763972356,
            "unit": "ns",
            "range": "± 5366.701606449759"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2458293.804347826,
            "unit": "ns",
            "range": "± 92971.95224364281"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2549048.1315789474,
            "unit": "ns",
            "range": "± 86253.81247074807"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3192719,
            "unit": "ns",
            "range": "± 76552.02523463249"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2975338.7602739725,
            "unit": "ns",
            "range": "± 145323.02409986017"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6892011,
            "unit": "ns",
            "range": "± 177391.50141498004"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42574.3125,
            "unit": "ns",
            "range": "± 6962.104160627091"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 210007.975,
            "unit": "ns",
            "range": "± 10967.349656155755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 199754.74137931035,
            "unit": "ns",
            "range": "± 8629.792733093447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167971.6875,
            "unit": "ns",
            "range": "± 5210.063738310508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3156635.1333333333,
            "unit": "ns",
            "range": "± 39154.67366714926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2904764.1333333333,
            "unit": "ns",
            "range": "± 46297.22269650226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18685.742424242424,
            "unit": "ns",
            "range": "± 5273.979473950501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 73986.2741935484,
            "unit": "ns",
            "range": "± 9386.489631992394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88430.67708333333,
            "unit": "ns",
            "range": "± 10539.15830205049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88703.78260869565,
            "unit": "ns",
            "range": "± 13976.242683805163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5493.265306122449,
            "unit": "ns",
            "range": "± 1344.838813405405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15310.645161290322,
            "unit": "ns",
            "range": "± 2142.437836575536"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5884541.2,
            "unit": "ns",
            "range": "± 62983.80825169048"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14650980.642857144,
            "unit": "ns",
            "range": "± 95833.76650370011"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36802230.5,
            "unit": "ns",
            "range": "± 382307.3049883151"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74529750.23333333,
            "unit": "ns",
            "range": "± 399528.9318657423"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149699340.65384614,
            "unit": "ns",
            "range": "± 659148.0333158409"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 990940.4631578948,
            "unit": "ns",
            "range": "± 68317.2655015772"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1919081.7432432433,
            "unit": "ns",
            "range": "± 64365.47787543906"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1441625.5227272727,
            "unit": "ns",
            "range": "± 105153.49165391976"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5781270.397435897,
            "unit": "ns",
            "range": "± 199519.30199327567"
          }
        ]
      }
    ]
  }
}