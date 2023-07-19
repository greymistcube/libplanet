window.BENCHMARK_DATA = {
  "lastUpdate": 1689780847904,
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
          "id": "0e9db4a144b2f78afa6a4c708219dc39103a657b",
          "message": "Edited csproj",
          "timestamp": "2023-07-20T00:14:50+09:00",
          "tree_id": "9d01215fa046c2270f1c12d42b56752b93b1a265",
          "url": "https://github.com/greymistcube/libplanet/commit/0e9db4a144b2f78afa6a4c708219dc39103a657b"
        },
        "date": 1689780830027,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9356401.284313725,
            "unit": "ns",
            "range": "± 376305.35655971273"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22873601.48387097,
            "unit": "ns",
            "range": "± 1038974.7697212672"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55840803.32022472,
            "unit": "ns",
            "range": "± 3181595.890187357"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109072710.08823529,
            "unit": "ns",
            "range": "± 3519027.7870659973"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219177246.7580645,
            "unit": "ns",
            "range": "± 12026850.604944907"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68074.47894736842,
            "unit": "ns",
            "range": "± 11001.110731135332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 324856,
            "unit": "ns",
            "range": "± 30731.72443103809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 326478.0306122449,
            "unit": "ns",
            "range": "± 31815.055070569706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 299377.2083333333,
            "unit": "ns",
            "range": "± 18812.67477606054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4053779.388888889,
            "unit": "ns",
            "range": "± 85052.08018214756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3796609.8666666667,
            "unit": "ns",
            "range": "± 52672.89371321657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19339.690721649484,
            "unit": "ns",
            "range": "± 2849.4002013611885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113012.08163265306,
            "unit": "ns",
            "range": "± 13488.172759311024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 113862.70786516854,
            "unit": "ns",
            "range": "± 6302.998547232478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109049.83333333333,
            "unit": "ns",
            "range": "± 12179.017271448694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7361.989473684211,
            "unit": "ns",
            "range": "± 630.0856492731231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22313.772727272728,
            "unit": "ns",
            "range": "± 4300.868321957792"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1540708.6354166667,
            "unit": "ns",
            "range": "± 151931.11167202477"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2962229.2527472526,
            "unit": "ns",
            "range": "± 226198.2670637811"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2004123.747311828,
            "unit": "ns",
            "range": "± 133752.1560336307"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6338090.875,
            "unit": "ns",
            "range": "± 475647.2165394775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3368352.827160494,
            "unit": "ns",
            "range": "± 176222.08233510278"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3804717.1315789474,
            "unit": "ns",
            "range": "± 397583.3094614515"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4787632.479166667,
            "unit": "ns",
            "range": "± 429852.56194391457"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4111952.3666666667,
            "unit": "ns",
            "range": "± 301442.8743421017"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7587944.304347826,
            "unit": "ns",
            "range": "± 536479.5661806299"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6093718.086588542,
            "unit": "ns",
            "range": "± 65714.78781164344"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1844258.73359375,
            "unit": "ns",
            "range": "± 14868.366685802826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1300388.2242838542,
            "unit": "ns",
            "range": "± 38377.94614414684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2781857.1452713814,
            "unit": "ns",
            "range": "± 159077.95515289524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 845324.3505859375,
            "unit": "ns",
            "range": "± 9019.001443519945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 713949.6594801683,
            "unit": "ns",
            "range": "± 3884.089799988729"
          }
        ]
      }
    ]
  }
}