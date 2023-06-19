window.BENCHMARK_DATA = {
  "lastUpdate": 1687178189544,
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
          "id": "35d08c7f409dc239ec327079abe362aef2ca70ee",
          "message": "Remove signer from account state delta; Accept IActionContext for Mint\nand Burn",
          "timestamp": "2023-06-19T21:18:01+09:00",
          "tree_id": "e6e0829644ff46bbc6e3cbe49450e33583d2395f",
          "url": "https://github.com/greymistcube/libplanet/commit/35d08c7f409dc239ec327079abe362aef2ca70ee"
        },
        "date": 1687178180310,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4074327.7419354836,
            "unit": "ns",
            "range": "± 185214.40512179615"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4319051.815789473,
            "unit": "ns",
            "range": "± 219698.133314583"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5599741.386363637,
            "unit": "ns",
            "range": "± 205314.52047146752"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4737801.5051546395,
            "unit": "ns",
            "range": "± 317677.39042036695"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8659442.420289855,
            "unit": "ns",
            "range": "± 414202.8286600095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7631400.953125,
            "unit": "ns",
            "range": "± 61213.995110015625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2424637.630989583,
            "unit": "ns",
            "range": "± 24837.51232559261"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1723094.119140625,
            "unit": "ns",
            "range": "± 23869.26341230312"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3269313.418269231,
            "unit": "ns",
            "range": "± 14925.813623981381"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1083931.0643136161,
            "unit": "ns",
            "range": "± 7575.467277473089"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1000841.196484375,
            "unit": "ns",
            "range": "± 11568.33465782409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 378385.10638297873,
            "unit": "ns",
            "range": "± 36593.11214771474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 356000.8020833333,
            "unit": "ns",
            "range": "± 32380.405733818912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 316821.59574468085,
            "unit": "ns",
            "range": "± 26529.59762565023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5398792,
            "unit": "ns",
            "range": "± 188752.99823640092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4880789.972222222,
            "unit": "ns",
            "range": "± 146575.53637795403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25459.551020408162,
            "unit": "ns",
            "range": "± 9334.94073457291"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111698.36170212766,
            "unit": "ns",
            "range": "± 13863.349452416176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 110286.35106382979,
            "unit": "ns",
            "range": "± 18088.24452909254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 132971.46875,
            "unit": "ns",
            "range": "± 22410.70833045438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6198.031578947369,
            "unit": "ns",
            "range": "± 1210.3236990321927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24907.54,
            "unit": "ns",
            "range": "± 9504.84213272797"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1778838.4361702127,
            "unit": "ns",
            "range": "± 162784.77852255004"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3432706.397959184,
            "unit": "ns",
            "range": "± 218833.05258235126"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2308177.8936170214,
            "unit": "ns",
            "range": "± 172325.08664714365"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6810272.75257732,
            "unit": "ns",
            "range": "± 545774.1910748404"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63428.61855670103,
            "unit": "ns",
            "range": "± 13475.068196675991"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10215771.396551725,
            "unit": "ns",
            "range": "± 441832.31459743204"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27057202.346938774,
            "unit": "ns",
            "range": "± 1068934.1552359636"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69363148.46666667,
            "unit": "ns",
            "range": "± 2586276.429567926"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137553519.36842105,
            "unit": "ns",
            "range": "± 4697841.539015168"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 285131389,
            "unit": "ns",
            "range": "± 6466548.3109332025"
          }
        ]
      }
    ]
  }
}