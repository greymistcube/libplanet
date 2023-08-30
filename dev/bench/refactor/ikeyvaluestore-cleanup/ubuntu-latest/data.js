window.BENCHMARK_DATA = {
  "lastUpdate": 1693379815937,
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
          "id": "39e52aba4cbde119579b4cf5df3a381e960bc8f5",
          "message": "Removed unused Get()",
          "timestamp": "2023-08-30T16:02:47+09:00",
          "tree_id": "134dcb6fe4e18ac927f34502576fb3ad458102a9",
          "url": "https://github.com/greymistcube/libplanet/commit/39e52aba4cbde119579b4cf5df3a381e960bc8f5"
        },
        "date": 1693379808741,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1417751.90625,
            "unit": "ns",
            "range": "± 90983.2568508107"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2762232.7,
            "unit": "ns",
            "range": "± 95726.23884733177"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1842182.440860215,
            "unit": "ns",
            "range": "± 104343.21951132384"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4891481.116279069,
            "unit": "ns",
            "range": "± 180086.08122641282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 291419.8703703704,
            "unit": "ns",
            "range": "± 12209.079394537674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 281828.1111111111,
            "unit": "ns",
            "range": "± 9364.176271538487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 253318.13461538462,
            "unit": "ns",
            "range": "± 10470.626984670575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4564143.533333333,
            "unit": "ns",
            "range": "± 35296.53218471563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4159153,
            "unit": "ns",
            "range": "± 39616.578484987105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23926.395833333332,
            "unit": "ns",
            "range": "± 2025.8932973365065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98948.92391304347,
            "unit": "ns",
            "range": "± 5732.259122065123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84856.63917525773,
            "unit": "ns",
            "range": "± 5458.913706776528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98547.46391752578,
            "unit": "ns",
            "range": "± 14868.539143146803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7056.3125,
            "unit": "ns",
            "range": "± 970.5070873409155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23904.559139784946,
            "unit": "ns",
            "range": "± 1869.2991331463943"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50733,
            "unit": "ns",
            "range": "± 2482.548006129937"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8396045.307692308,
            "unit": "ns",
            "range": "± 78568.7852928721"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23039500.42857143,
            "unit": "ns",
            "range": "± 190529.98929089043"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58622549.4,
            "unit": "ns",
            "range": "± 268355.1572444355"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111943939.66666667,
            "unit": "ns",
            "range": "± 1040863.3049875794"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230770923.92857143,
            "unit": "ns",
            "range": "± 1580457.7783859123"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3721340.6428571427,
            "unit": "ns",
            "range": "± 48435.278628141634"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3787263.090909091,
            "unit": "ns",
            "range": "± 112317.48140882934"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4503257.461538462,
            "unit": "ns",
            "range": "± 46988.202314721835"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4119903.6129032257,
            "unit": "ns",
            "range": "± 99466.36901609086"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6473177.866666666,
            "unit": "ns",
            "range": "± 100941.76557151771"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5065822.968149038,
            "unit": "ns",
            "range": "± 19474.760740655754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1585402.4309430805,
            "unit": "ns",
            "range": "± 2010.4814777060144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1065047.506138393,
            "unit": "ns",
            "range": "± 1392.3247904690277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2628939.549278846,
            "unit": "ns",
            "range": "± 2498.3643544827864"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 841815.2642578125,
            "unit": "ns",
            "range": "± 1129.553368605261"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 764581.3399088542,
            "unit": "ns",
            "range": "± 728.7741932968959"
          }
        ]
      }
    ]
  }
}