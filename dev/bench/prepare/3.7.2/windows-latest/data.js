window.BENCHMARK_DATA = {
  "lastUpdate": 1700537805465,
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
          "id": "9d18fcc0129e672c0be35eba54d8ce50f8b57fa9",
          "message": "Prepare 3.7.2",
          "timestamp": "2023-11-21T12:23:02+09:00",
          "tree_id": "a4b48bdf93b217e18d7fc507c9f078ceda65c009",
          "url": "https://github.com/greymistcube/libplanet/commit/9d18fcc0129e672c0be35eba54d8ce50f8b57fa9"
        },
        "date": 1700537781763,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 955364.2105263158,
            "unit": "ns",
            "range": "± 108738.2421286633"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1725519.0476190476,
            "unit": "ns",
            "range": "± 92204.00048320105"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1337945.8333333333,
            "unit": "ns",
            "range": "± 146684.37143936433"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4789666.666666667,
            "unit": "ns",
            "range": "± 159725.18541902796"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34662.16216216216,
            "unit": "ns",
            "range": "± 1752.4700925830377"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4823773.333333333,
            "unit": "ns",
            "range": "± 47733.86738195529"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12896133.333333334,
            "unit": "ns",
            "range": "± 304654.0469669381"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32565242.85714286,
            "unit": "ns",
            "range": "± 397900.7060412583"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 62772871.428571425,
            "unit": "ns",
            "range": "± 352236.00791901624"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 127026314.28571428,
            "unit": "ns",
            "range": "± 738990.9376535452"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3248930.6640625,
            "unit": "ns",
            "range": "± 5556.266897264471"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1047651.6536458334,
            "unit": "ns",
            "range": "± 2432.2309247314265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 757788.7760416666,
            "unit": "ns",
            "range": "± 1666.0668976129823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1872971.9951923077,
            "unit": "ns",
            "range": "± 3591.170246314155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 609630.2509014423,
            "unit": "ns",
            "range": "± 1102.6476310055791"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 553345.7421875,
            "unit": "ns",
            "range": "± 920.2783584645897"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2088950,
            "unit": "ns",
            "range": "± 56593.54910234911"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2238114.285714286,
            "unit": "ns",
            "range": "± 31185.24940127592"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2862189.6551724137,
            "unit": "ns",
            "range": "± 81996.08154761154"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2583872.8260869565,
            "unit": "ns",
            "range": "± 144579.03508231082"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5696717.857142857,
            "unit": "ns",
            "range": "± 153373.83294511202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 167981.914893617,
            "unit": "ns",
            "range": "± 6245.140941876635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 162375.90361445784,
            "unit": "ns",
            "range": "± 8261.866415860484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140473.91304347827,
            "unit": "ns",
            "range": "± 2295.4930924638843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2683993.3333333335,
            "unit": "ns",
            "range": "± 46052.70996627772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2440228.5714285714,
            "unit": "ns",
            "range": "± 32968.12979860372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10587.368421052632,
            "unit": "ns",
            "range": "± 1448.2742558882821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52844.086021505376,
            "unit": "ns",
            "range": "± 6230.665090564629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44375.38461538462,
            "unit": "ns",
            "range": "± 1973.5778716292439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55698.94736842105,
            "unit": "ns",
            "range": "± 12311.450255384922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2393.75,
            "unit": "ns",
            "range": "± 443.62442626499654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9455.555555555555,
            "unit": "ns",
            "range": "± 920.1991859498256"
          }
        ]
      }
    ]
  }
}