window.BENCHMARK_DATA = {
  "lastUpdate": 1703577881754,
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
        "date": 1703577867340,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7634113.807692308,
            "unit": "ns",
            "range": "± 66175.37738890579"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18705718.233333334,
            "unit": "ns",
            "range": "± 165973.32935464862"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46398018.11904762,
            "unit": "ns",
            "range": "± 1079231.0889217136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94882172.35714285,
            "unit": "ns",
            "range": "± 1451319.696797412"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 188422552.06666666,
            "unit": "ns",
            "range": "± 2670238.3787076673"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32730.077777777777,
            "unit": "ns",
            "range": "± 1949.6172383073347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 217473.45555555556,
            "unit": "ns",
            "range": "± 17074.513730823197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 206669.37234042553,
            "unit": "ns",
            "range": "± 11858.958945391201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 192434.55913978495,
            "unit": "ns",
            "range": "± 14733.775883015222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3696712.3095238097,
            "unit": "ns",
            "range": "± 87822.1936298673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3442289.923076923,
            "unit": "ns",
            "range": "± 47404.432511565734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11942.757894736842,
            "unit": "ns",
            "range": "± 802.7822459288069"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56093.434782608696,
            "unit": "ns",
            "range": "± 3972.8521277121536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50218.90277777778,
            "unit": "ns",
            "range": "± 2488.6208786672696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62015.541666666664,
            "unit": "ns",
            "range": "± 13189.999698269548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3408.3684210526317,
            "unit": "ns",
            "range": "± 701.8415450166157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11178.744186046511,
            "unit": "ns",
            "range": "± 743.6084071613865"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1044448.52,
            "unit": "ns",
            "range": "± 93488.95015778953"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2203957.630769231,
            "unit": "ns",
            "range": "± 101860.19582106295"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1548565.09375,
            "unit": "ns",
            "range": "± 108707.11453186379"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6704821.147058823,
            "unit": "ns",
            "range": "± 319758.6601398168"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2892560.01369863,
            "unit": "ns",
            "range": "± 143486.17331640678"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2955017.4024390243,
            "unit": "ns",
            "range": "± 106025.36182815053"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3552873.75,
            "unit": "ns",
            "range": "± 88280.77609401081"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3370954.638888889,
            "unit": "ns",
            "range": "± 104227.42113725649"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12837217.239583334,
            "unit": "ns",
            "range": "± 2135623.5997288832"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4169086.0150240385,
            "unit": "ns",
            "range": "± 47557.253158833424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1333432.3278645833,
            "unit": "ns",
            "range": "± 15236.2431506085"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 866960.2332589285,
            "unit": "ns",
            "range": "± 5850.611744547254"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1965219.1565104167,
            "unit": "ns",
            "range": "± 35548.50202299455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627026.1925330529,
            "unit": "ns",
            "range": "± 5665.443569347081"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570447.680353338,
            "unit": "ns",
            "range": "± 11379.821361340042"
          }
        ]
      }
    ]
  }
}