window.BENCHMARK_DATA = {
  "lastUpdate": 1683611687254,
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
          "id": "7e215976c22135f841b0c847f070f41df932dda6",
          "message": "Prepare 1.2.0",
          "timestamp": "2023-05-09T14:40:28+09:00",
          "tree_id": "6e83753f227a51959e4e13e4c26d550555ed1a33",
          "url": "https://github.com/greymistcube/libplanet/commit/7e215976c22135f841b0c847f070f41df932dda6"
        },
        "date": 1683611665574,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1228705.6179775281,
            "unit": "ns",
            "range": "± 65201.88814811787"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2360024.1379310344,
            "unit": "ns",
            "range": "± 69145.46599727486"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2023810.6666666667,
            "unit": "ns",
            "range": "± 101356.51497524927"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4633486.363636363,
            "unit": "ns",
            "range": "± 111341.35540868193"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40888.356164383564,
            "unit": "ns",
            "range": "± 2005.3837355829532"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6758335.714285715,
            "unit": "ns",
            "range": "± 27439.29263337122"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17195380,
            "unit": "ns",
            "range": "± 109080.94766207866"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44403928.571428575,
            "unit": "ns",
            "range": "± 265841.5850683417"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 88522380,
            "unit": "ns",
            "range": "± 533118.7903004626"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 177691471.42857143,
            "unit": "ns",
            "range": "± 1248957.529873843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4791276.197916667,
            "unit": "ns",
            "range": "± 13376.510822008046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1504002.7083333333,
            "unit": "ns",
            "range": "± 2118.7408213866047"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1152971.7708333333,
            "unit": "ns",
            "range": "± 1846.159134230766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2585188.2421875,
            "unit": "ns",
            "range": "± 5338.106898355062"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 811861.4188058035,
            "unit": "ns",
            "range": "± 2121.6652959714556"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 742931.85546875,
            "unit": "ns",
            "range": "± 823.3145355048201"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2874978.125,
            "unit": "ns",
            "range": "± 89406.1401311183"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3080439.4736842103,
            "unit": "ns",
            "range": "± 64626.86829224481"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3867300,
            "unit": "ns",
            "range": "± 70166.98178868272"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3764224.242424242,
            "unit": "ns",
            "range": "± 116968.98635509924"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6128822,
            "unit": "ns",
            "range": "± 155849.29290824517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 246558.33333333334,
            "unit": "ns",
            "range": "± 7602.710416276477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 234061.62790697673,
            "unit": "ns",
            "range": "± 6572.424692184822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 211837.5,
            "unit": "ns",
            "range": "± 8282.579128585287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3740193.3333333335,
            "unit": "ns",
            "range": "± 44603.08231928543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3445646.6666666665,
            "unit": "ns",
            "range": "± 51550.92997175105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16026.315789473685,
            "unit": "ns",
            "range": "± 1191.1205636242144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 75983.07692307692,
            "unit": "ns",
            "range": "± 3554.9072258802175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65714.77272727272,
            "unit": "ns",
            "range": "± 3596.0239784379255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 77108.88888888889,
            "unit": "ns",
            "range": "± 8520.796033452238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4072.9166666666665,
            "unit": "ns",
            "range": "± 692.7411860696554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14875.531914893618,
            "unit": "ns",
            "range": "± 1446.8866219645372"
          }
        ]
      }
    ]
  }
}