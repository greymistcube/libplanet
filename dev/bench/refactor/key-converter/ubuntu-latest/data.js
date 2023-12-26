window.BENCHMARK_DATA = {
  "lastUpdate": 1703577764552,
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
        "date": 1703577758211,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3669809.191145833,
            "unit": "ns",
            "range": "± 57459.06679420159"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1208437.346484375,
            "unit": "ns",
            "range": "± 26598.582546927424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 774325.5537923177,
            "unit": "ns",
            "range": "± 2490.947225616172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1980299.4265625,
            "unit": "ns",
            "range": "± 43744.770386345925"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618036.6141927083,
            "unit": "ns",
            "range": "± 11422.80830222982"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571403.9873046875,
            "unit": "ns",
            "range": "± 3974.7720726559232"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2433301.6,
            "unit": "ns",
            "range": "± 32763.754764329788"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2534284.6481481483,
            "unit": "ns",
            "range": "± 105527.74908250925"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3112668.1315789474,
            "unit": "ns",
            "range": "± 66996.82137004755"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2939457.195652174,
            "unit": "ns",
            "range": "± 104317.86632464995"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6940398.5,
            "unit": "ns",
            "range": "± 140684.2572241325"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38957.04255319149,
            "unit": "ns",
            "range": "± 4520.1809452431935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198191.1607142857,
            "unit": "ns",
            "range": "± 8152.557331686088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196157.51470588235,
            "unit": "ns",
            "range": "± 9236.778079952335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 162182.13333333333,
            "unit": "ns",
            "range": "± 2495.0531590863284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3096120.4285714286,
            "unit": "ns",
            "range": "± 30497.82775042356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2814527.947368421,
            "unit": "ns",
            "range": "± 60632.55185905934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14351.319587628866,
            "unit": "ns",
            "range": "± 3016.3507530706424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62113.58888888889,
            "unit": "ns",
            "range": "± 3926.276827013993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62216.171428571426,
            "unit": "ns",
            "range": "± 1905.3092613832025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63899.10824742268,
            "unit": "ns",
            "range": "± 15416.013624607951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3426.425531914894,
            "unit": "ns",
            "range": "± 646.6939328476586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15579.938144329897,
            "unit": "ns",
            "range": "± 2839.53116293882"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5533369.966666667,
            "unit": "ns",
            "range": "± 43650.34837508936"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14287938.92857143,
            "unit": "ns",
            "range": "± 136488.56465172025"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36950170.4,
            "unit": "ns",
            "range": "± 312379.28180562804"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75315844.78571428,
            "unit": "ns",
            "range": "± 905533.2116108062"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149618921.6153846,
            "unit": "ns",
            "range": "± 784985.4165661868"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 968678.7391304348,
            "unit": "ns",
            "range": "± 66351.10684368234"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1871193.1206896552,
            "unit": "ns",
            "range": "± 81000.6875998707"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1384872.0107526882,
            "unit": "ns",
            "range": "± 102095.52002834689"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5975949.0869565215,
            "unit": "ns",
            "range": "± 229541.8367322975"
          }
        ]
      }
    ]
  }
}