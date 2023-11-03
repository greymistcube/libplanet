window.BENCHMARK_DATA = {
  "lastUpdate": 1699002409951,
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
          "id": "0e72cb326937cc8187ec97be38ce02d3030a35e5",
          "message": "Remove public updatedAddresses parameter from Transaction.Create()",
          "timestamp": "2023-11-03T17:48:20+09:00",
          "tree_id": "f5e73c27bae6c711624a26ac0ac99945fe783f9c",
          "url": "https://github.com/greymistcube/libplanet/commit/0e72cb326937cc8187ec97be38ce02d3030a35e5"
        },
        "date": 1699002394399,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8120652.766666667,
            "unit": "ns",
            "range": "± 131301.33033732895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19794098.64285714,
            "unit": "ns",
            "range": "± 350585.97600075376"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49158767.86,
            "unit": "ns",
            "range": "± 1920631.0785133562"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96558447.5,
            "unit": "ns",
            "range": "± 1465855.2172317884"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199862669.25,
            "unit": "ns",
            "range": "± 1363133.468107422"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56924.032608695656,
            "unit": "ns",
            "range": "± 5991.069163696887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 302263.38764044945,
            "unit": "ns",
            "range": "± 24030.445655856034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 300245.5104166667,
            "unit": "ns",
            "range": "± 27730.416904640177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 315340.41764705884,
            "unit": "ns",
            "range": "± 45872.02161583998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4441631.632653061,
            "unit": "ns",
            "range": "± 258084.67278038323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3794120.0421686745,
            "unit": "ns",
            "range": "± 202275.7963176973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17694.157894736843,
            "unit": "ns",
            "range": "± 2211.465410545251"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98976.7258064516,
            "unit": "ns",
            "range": "± 9886.816884695534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 114052.4010989011,
            "unit": "ns",
            "range": "± 17200.30780800477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114783.64367816092,
            "unit": "ns",
            "range": "± 13427.754387208097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8357.070707070707,
            "unit": "ns",
            "range": "± 1401.4218090161967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22528.11224489796,
            "unit": "ns",
            "range": "± 4993.9849461037"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1612229.4948453608,
            "unit": "ns",
            "range": "± 218882.8814955483"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2893220.25,
            "unit": "ns",
            "range": "± 184350.98146051195"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2344127.525773196,
            "unit": "ns",
            "range": "± 181690.3258294804"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10841942.820754716,
            "unit": "ns",
            "range": "± 451780.8769032315"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3247740.7647058824,
            "unit": "ns",
            "range": "± 132091.7448684191"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3525087.7,
            "unit": "ns",
            "range": "± 79751.75055204613"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4371270.090909091,
            "unit": "ns",
            "range": "± 204974.99240271142"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4444454.212121212,
            "unit": "ns",
            "range": "± 348993.3123847958"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15525337.40425532,
            "unit": "ns",
            "range": "± 1736080.2707709877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6249808.142427885,
            "unit": "ns",
            "range": "± 87174.70152712782"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1845535.252734375,
            "unit": "ns",
            "range": "± 34081.98660336103"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1156061.0561523438,
            "unit": "ns",
            "range": "± 44809.69073427338"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2668648.637606534,
            "unit": "ns",
            "range": "± 64875.89311598376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 903985.9168419471,
            "unit": "ns",
            "range": "± 23972.38878302001"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 790296.97820173,
            "unit": "ns",
            "range": "± 33823.26252197507"
          }
        ]
      }
    ]
  }
}