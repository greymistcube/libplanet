window.BENCHMARK_DATA = {
  "lastUpdate": 1687489432418,
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
          "id": "f0cb568d30aeccaea3eeda7a77144cac765f49af",
          "message": "Prepare 2.3.0",
          "timestamp": "2023-06-23T11:37:59+09:00",
          "tree_id": "c6fb980fe742c5f31731823d660fa1da6b41728d",
          "url": "https://github.com/greymistcube/libplanet/commit/f0cb568d30aeccaea3eeda7a77144cac765f49af"
        },
        "date": 1687489412689,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9748618.994736843,
            "unit": "ns",
            "range": "± 924544.070106851"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21418184.603174604,
            "unit": "ns",
            "range": "± 976104.0891661878"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56012136.75,
            "unit": "ns",
            "range": "± 2664965.395711123"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110171908.14102565,
            "unit": "ns",
            "range": "± 5656514.367817404"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 233345027.5,
            "unit": "ns",
            "range": "± 4568082.862305966"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 86581.03529411765,
            "unit": "ns",
            "range": "± 10315.416006715222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 390232.25531914894,
            "unit": "ns",
            "range": "± 59976.18177972796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 392461.5494505495,
            "unit": "ns",
            "range": "± 66680.0146936036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 372791.31720430107,
            "unit": "ns",
            "range": "± 55324.23668581788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4542533.302083333,
            "unit": "ns",
            "range": "± 324491.7910045806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4271553.18,
            "unit": "ns",
            "range": "± 394340.1327912308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28300.68181818182,
            "unit": "ns",
            "range": "± 5527.3108082647095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 130239.48351648351,
            "unit": "ns",
            "range": "± 18137.94571019101"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 138137.76666666666,
            "unit": "ns",
            "range": "± 26689.797575987548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 147400.57291666666,
            "unit": "ns",
            "range": "± 29479.580590905287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8678.142857142857,
            "unit": "ns",
            "range": "± 1242.9066789982314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26743.016853932586,
            "unit": "ns",
            "range": "± 4129.518462221274"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1747209.8723404256,
            "unit": "ns",
            "range": "± 215356.81411240468"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3625334.061797753,
            "unit": "ns",
            "range": "± 575008.5789019696"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3503733.566666667,
            "unit": "ns",
            "range": "± 899956.2479746958"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9194644.23076923,
            "unit": "ns",
            "range": "± 2362533.289425828"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3824206.2315789475,
            "unit": "ns",
            "range": "± 474138.2009339492"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4004843.654639175,
            "unit": "ns",
            "range": "± 480145.71288256557"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5388992.978494624,
            "unit": "ns",
            "range": "± 685509.1260761559"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5421913.075757576,
            "unit": "ns",
            "range": "± 611210.775822275"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9402884.921052631,
            "unit": "ns",
            "range": "± 1225457.3652099315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8213544.061875,
            "unit": "ns",
            "range": "± 547495.3970601005"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2205573.1978462837,
            "unit": "ns",
            "range": "± 74561.27405969166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1453745.5865234374,
            "unit": "ns",
            "range": "± 33157.43169025713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3293818.490959246,
            "unit": "ns",
            "range": "± 222827.02339429795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 983901.4184570312,
            "unit": "ns",
            "range": "± 14052.543256388122"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 916440.427594866,
            "unit": "ns",
            "range": "± 15235.135677592423"
          }
        ]
      }
    ]
  }
}