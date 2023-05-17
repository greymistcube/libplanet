window.BENCHMARK_DATA = {
  "lastUpdate": 1684328626855,
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
          "id": "86fbb2e8e588a7acdde12fa7ead91fded0db40f3",
          "message": "Release 1.2.1",
          "timestamp": "2023-05-17T21:48:04+09:00",
          "tree_id": "b2d3ed91786a1c1441663fba400fbb99f721c2ca",
          "url": "https://github.com/greymistcube/libplanet/commit/86fbb2e8e588a7acdde12fa7ead91fded0db40f3"
        },
        "date": 1684328616820,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4253364.05882353,
            "unit": "ns",
            "range": "± 85951.7471742653"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4445105.214285715,
            "unit": "ns",
            "range": "± 64814.66560085417"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5479958.866666666,
            "unit": "ns",
            "range": "± 92620.5612284155"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5482781.5,
            "unit": "ns",
            "range": "± 98547.88727923091"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8483893.333333334,
            "unit": "ns",
            "range": "± 178417.28021823053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 347267.5294117647,
            "unit": "ns",
            "range": "± 6197.39541176016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 339828.93333333335,
            "unit": "ns",
            "range": "± 9971.569896575907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 308721.28571428574,
            "unit": "ns",
            "range": "± 13222.588480893783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5321897.666666667,
            "unit": "ns",
            "range": "± 41286.63116670138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4835814.384615385,
            "unit": "ns",
            "range": "± 54524.167373343815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24301.610526315788,
            "unit": "ns",
            "range": "± 2068.885054316243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 109477.94736842105,
            "unit": "ns",
            "range": "± 6965.4022953091735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 100669.46875,
            "unit": "ns",
            "range": "± 6988.764065048118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118495.58421052631,
            "unit": "ns",
            "range": "± 15226.082169319714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7287.28125,
            "unit": "ns",
            "range": "± 992.2146913596875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25698.67021276596,
            "unit": "ns",
            "range": "± 2062.483435649602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7135182.81640625,
            "unit": "ns",
            "range": "± 30346.589334374603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2201634.11484375,
            "unit": "ns",
            "range": "± 3240.147993417161"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1616014.3062220982,
            "unit": "ns",
            "range": "± 3761.6306340760566"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3109947.2452566964,
            "unit": "ns",
            "range": "± 6995.656363346081"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 999108.5333333333,
            "unit": "ns",
            "range": "± 648.7065378985398"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 886338.4886067709,
            "unit": "ns",
            "range": "± 1158.940668304908"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10549659.933333334,
            "unit": "ns",
            "range": "± 174194.26375641103"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26262604,
            "unit": "ns",
            "range": "± 224559.58090029334"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66574637.8,
            "unit": "ns",
            "range": "± 278478.27563646174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 132777220.33333333,
            "unit": "ns",
            "range": "± 804328.5688471264"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 268854979.28571427,
            "unit": "ns",
            "range": "± 313946.0807201866"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1749558.0353535353,
            "unit": "ns",
            "range": "± 115114.15416138929"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3307309.896551724,
            "unit": "ns",
            "range": "± 94894.69664932539"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2796334.7195121953,
            "unit": "ns",
            "range": "± 148095.06230665397"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6692771.478260869,
            "unit": "ns",
            "range": "± 168498.22210280536"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60499.364705882355,
            "unit": "ns",
            "range": "± 3012.7033535279484"
          }
        ]
      }
    ]
  }
}