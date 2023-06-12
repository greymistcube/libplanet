window.BENCHMARK_DATA = {
  "lastUpdate": 1686575783313,
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
          "id": "d34f81fcdc5110778e15209b674451cf0f8e1951",
          "message": "Derive ActionContext.BlockAction instead of assigning",
          "timestamp": "2023-06-12T22:04:14+09:00",
          "tree_id": "86d1e01d5b015b0e21d3b4082135395949884e73",
          "url": "https://github.com/greymistcube/libplanet/commit/d34f81fcdc5110778e15209b674451cf0f8e1951"
        },
        "date": 1686575776046,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1499915.3529411764,
            "unit": "ns",
            "range": "± 30396.46629943433"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2589763.3513513515,
            "unit": "ns",
            "range": "± 87065.98955237478"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2147462.3720930233,
            "unit": "ns",
            "range": "± 116723.32995089123"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5234223.586206896,
            "unit": "ns",
            "range": "± 151887.2021740187"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3219329.8,
            "unit": "ns",
            "range": "± 54853.88614335881"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3305566.5,
            "unit": "ns",
            "range": "± 105803.35988631248"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4137920.5714285714,
            "unit": "ns",
            "range": "± 55172.69238381539"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4109267,
            "unit": "ns",
            "range": "± 72050.40173973455"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6545338.583333333,
            "unit": "ns",
            "range": "± 61985.35084922497"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7569146.142857143,
            "unit": "ns",
            "range": "± 14122.892724265057"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19413425.083333332,
            "unit": "ns",
            "range": "± 63967.67987245709"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50176930.4,
            "unit": "ns",
            "range": "± 404586.6734137092"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98730189.2,
            "unit": "ns",
            "range": "± 1040238.862200834"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197580772.8,
            "unit": "ns",
            "range": "± 1319907.599841162"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5920081.783482143,
            "unit": "ns",
            "range": "± 16093.010869007627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1968733.3758370536,
            "unit": "ns",
            "range": "± 1316.8193804876462"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1362621.5583333333,
            "unit": "ns",
            "range": "± 1114.8165526264722"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2553313.7953125,
            "unit": "ns",
            "range": "± 2203.2359904522905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 807926.2838309152,
            "unit": "ns",
            "range": "± 440.16061464913446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 741823.6154296875,
            "unit": "ns",
            "range": "± 356.88049502294064"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44829.0843373494,
            "unit": "ns",
            "range": "± 2399.960407218233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 279601.1875,
            "unit": "ns",
            "range": "± 5361.46996284601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 264423.4,
            "unit": "ns",
            "range": "± 9327.750421579296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 226722.42857142858,
            "unit": "ns",
            "range": "± 3185.3459107965923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4195426.714285715,
            "unit": "ns",
            "range": "± 29810.334262385666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3818319.4615384615,
            "unit": "ns",
            "range": "± 24926.045028628807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16008.4,
            "unit": "ns",
            "range": "± 1310.084059346267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83523.32786885246,
            "unit": "ns",
            "range": "± 3544.7120885497006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69796.44,
            "unit": "ns",
            "range": "± 1845.0642960793173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80886.97590361445,
            "unit": "ns",
            "range": "± 4759.350411650281"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4189.806122448979,
            "unit": "ns",
            "range": "± 531.5724322082352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15917.957894736843,
            "unit": "ns",
            "range": "± 1354.347490811668"
          }
        ]
      }
    ]
  }
}