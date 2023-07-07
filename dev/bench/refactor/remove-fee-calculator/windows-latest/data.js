window.BENCHMARK_DATA = {
  "lastUpdate": 1688714184470,
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
          "id": "aa4b8d8a5e2933739b814229cd8bbd9aa713d8ee",
          "message": "Removed IFeeCalculator",
          "timestamp": "2023-07-07T16:02:07+09:00",
          "tree_id": "76cc5bf139a9e106b2356c034b64eb761e2b55f5",
          "url": "https://github.com/greymistcube/libplanet/commit/aa4b8d8a5e2933739b814229cd8bbd9aa713d8ee"
        },
        "date": 1688714163999,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1404262.8865979381,
            "unit": "ns",
            "range": "± 120181.29215167984"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2597540.7407407407,
            "unit": "ns",
            "range": "± 107945.77301890287"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1855312,
            "unit": "ns",
            "range": "± 142772.23386792114"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4983929.545454546,
            "unit": "ns",
            "range": "± 186792.43620405084"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49079.78723404255,
            "unit": "ns",
            "range": "± 3181.4847344493423"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7047146.666666667,
            "unit": "ns",
            "range": "± 107991.1561634739"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19766300,
            "unit": "ns",
            "range": "± 330296.5528992739"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50001246.666666664,
            "unit": "ns",
            "range": "± 531922.5519171896"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99551093.33333333,
            "unit": "ns",
            "range": "± 1167718.438094846"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199518320,
            "unit": "ns",
            "range": "± 2958542.625347825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4797230.15625,
            "unit": "ns",
            "range": "± 12801.5928905358"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1533103.37890625,
            "unit": "ns",
            "range": "± 3915.788443045026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1168851.2109375,
            "unit": "ns",
            "range": "± 5733.218087804962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2620487.5130208335,
            "unit": "ns",
            "range": "± 9062.84055878864"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 837324.1731770834,
            "unit": "ns",
            "range": "± 2573.6086762058076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 762344.2103794643,
            "unit": "ns",
            "range": "± 1944.682232415934"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3164216.6666666665,
            "unit": "ns",
            "range": "± 74274.90379215132"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3255447.272727273,
            "unit": "ns",
            "range": "± 125733.2506399891"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4019302.9411764704,
            "unit": "ns",
            "range": "± 127397.65823758567"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3723127.0833333335,
            "unit": "ns",
            "range": "± 132278.41325246025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6254934.482758621,
            "unit": "ns",
            "range": "± 181335.6364705713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 264980.6451612903,
            "unit": "ns",
            "range": "± 11999.246406797462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 255722.5,
            "unit": "ns",
            "range": "± 9042.335967192867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231349,
            "unit": "ns",
            "range": "± 15799.146473557656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4043011.7647058824,
            "unit": "ns",
            "range": "± 81951.08207303412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3729155,
            "unit": "ns",
            "range": "± 74139.6014286562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19220.212765957447,
            "unit": "ns",
            "range": "± 2000.7299628764015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92452.08333333333,
            "unit": "ns",
            "range": "± 6772.7780068318025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78554.34782608696,
            "unit": "ns",
            "range": "± 5464.921363026293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102805.10204081633,
            "unit": "ns",
            "range": "± 15207.230865875516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6048.453608247422,
            "unit": "ns",
            "range": "± 1156.693689831591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20605.670103092783,
            "unit": "ns",
            "range": "± 2779.012454698197"
          }
        ]
      }
    ]
  }
}