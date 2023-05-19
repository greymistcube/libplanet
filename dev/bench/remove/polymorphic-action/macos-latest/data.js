window.BENCHMARK_DATA = {
  "lastUpdate": 1684517645374,
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
          "id": "68d72fa93f4e3833d3644989a12e7ee6a6104083",
          "message": "Remove PolymorphicAction",
          "timestamp": "2023-05-20T02:15:50+09:00",
          "tree_id": "cc65e3b81a1823674df671524a9a003f9bb5bec4",
          "url": "https://github.com/greymistcube/libplanet/commit/68d72fa93f4e3833d3644989a12e7ee6a6104083"
        },
        "date": 1684517626406,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7911563.923076923,
            "unit": "ns",
            "range": "± 51530.502011691315"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19659347,
            "unit": "ns",
            "range": "± 392359.98995171394"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50016545.84615385,
            "unit": "ns",
            "range": "± 195970.9498849452"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103878305.40625,
            "unit": "ns",
            "range": "± 7562614.823811764"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 243709839.45402297,
            "unit": "ns",
            "range": "± 35947791.45619436"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70838.82795698925,
            "unit": "ns",
            "range": "± 9040.59014958029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 334608.8461538461,
            "unit": "ns",
            "range": "± 34545.6177606503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 308827.7582417582,
            "unit": "ns",
            "range": "± 26769.462420759573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 314141.2894736842,
            "unit": "ns",
            "range": "± 30126.913361642084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4409968.063492063,
            "unit": "ns",
            "range": "± 200034.9728295814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3764681.0285714287,
            "unit": "ns",
            "range": "± 108038.83310493329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19052.70408163265,
            "unit": "ns",
            "range": "± 4051.042299909157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82937.72527472528,
            "unit": "ns",
            "range": "± 12190.797521141316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90587.49484536082,
            "unit": "ns",
            "range": "± 16846.808706277596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95843.56185567011,
            "unit": "ns",
            "range": "± 12938.159606224295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5053.925531914893,
            "unit": "ns",
            "range": "± 766.4075881468482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16862.288659793816,
            "unit": "ns",
            "range": "± 3916.9425735056284"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1579783.6530612244,
            "unit": "ns",
            "range": "± 139419.10225494305"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2933995.7804878047,
            "unit": "ns",
            "range": "± 140782.1026726724"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2391485.1770833335,
            "unit": "ns",
            "range": "± 140126.26187365488"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6396188.928571428,
            "unit": "ns",
            "range": "± 290114.84127209935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3459396.224137931,
            "unit": "ns",
            "range": "± 250386.8362261515"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3529492.147727273,
            "unit": "ns",
            "range": "± 263357.5372822881"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4540469.948717949,
            "unit": "ns",
            "range": "± 233643.09316867447"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4914321.534090909,
            "unit": "ns",
            "range": "± 599028.7310351525"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8022111.161538461,
            "unit": "ns",
            "range": "± 374291.2319839608"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6799657.36400463,
            "unit": "ns",
            "range": "± 189436.29839493905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2018567.3206129808,
            "unit": "ns",
            "range": "± 25722.47148492679"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1326718.7533854167,
            "unit": "ns",
            "range": "± 18600.16020207287"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2604527.966579861,
            "unit": "ns",
            "range": "± 55562.65704679166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 797933.4382672991,
            "unit": "ns",
            "range": "± 8255.485862366233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 760742.3609095982,
            "unit": "ns",
            "range": "± 10004.410881631766"
          }
        ]
      }
    ]
  }
}