window.BENCHMARK_DATA = {
  "lastUpdate": 1684325844359,
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
          "id": "cd8bfc7fd4a7d74935c7159b256d52d003f22b6b",
          "message": "Fixed query for tx with actions",
          "timestamp": "2023-05-17T20:59:49+09:00",
          "tree_id": "c362b588cc0c9a394907ff671fcfbf267622fb61",
          "url": "https://github.com/greymistcube/libplanet/commit/cd8bfc7fd4a7d74935c7159b256d52d003f22b6b"
        },
        "date": 1684325689818,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1352759.1836734693,
            "unit": "ns",
            "range": "± 123971.01327038307"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2483245.6140350876,
            "unit": "ns",
            "range": "± 107838.61299939871"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2139427.0833333335,
            "unit": "ns",
            "range": "± 156141.19553462646"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5464394.117647059,
            "unit": "ns",
            "range": "± 293842.61148126365"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49492.75362318841,
            "unit": "ns",
            "range": "± 2383.8500027192613"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6914107.142857143,
            "unit": "ns",
            "range": "± 66762.09731099404"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19303296,
            "unit": "ns",
            "range": "± 495829.96201654995"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48752092.85714286,
            "unit": "ns",
            "range": "± 824291.3716215099"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96297946.15384616,
            "unit": "ns",
            "range": "± 1564792.7304786963"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 191782028.57142857,
            "unit": "ns",
            "range": "± 3139009.7062678793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4765539.21875,
            "unit": "ns",
            "range": "± 25200.595999522833"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1507633.4375,
            "unit": "ns",
            "range": "± 7194.286980323156"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1167432.354266827,
            "unit": "ns",
            "range": "± 3587.952864899513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2622804.8958333335,
            "unit": "ns",
            "range": "± 10145.057143522443"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 840532.8841145834,
            "unit": "ns",
            "range": "± 1222.3008274615413"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763065.2083333334,
            "unit": "ns",
            "range": "± 3701.1991101469407"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3112662.0689655175,
            "unit": "ns",
            "range": "± 135518.4856006882"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3340880,
            "unit": "ns",
            "range": "± 56495.13506235989"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3995880.3921568627,
            "unit": "ns",
            "range": "± 160244.46451544948"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4026941.6666666665,
            "unit": "ns",
            "range": "± 157106.53768827434"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6993388.888888889,
            "unit": "ns",
            "range": "± 229733.54164929892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 265158.44155844155,
            "unit": "ns",
            "range": "± 13374.911221046728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 250147.5,
            "unit": "ns",
            "range": "± 8500.225864269121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 224051.38888888888,
            "unit": "ns",
            "range": "± 10993.69849024989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3891876.923076923,
            "unit": "ns",
            "range": "± 38857.392129129345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3586891.304347826,
            "unit": "ns",
            "range": "± 88749.78572595633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19054.83870967742,
            "unit": "ns",
            "range": "± 1965.4912058374632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90155.20833333333,
            "unit": "ns",
            "range": "± 5406.075914953991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74467.02127659574,
            "unit": "ns",
            "range": "± 4708.506105069624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103171.875,
            "unit": "ns",
            "range": "± 18871.380186186143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5770.32967032967,
            "unit": "ns",
            "range": "± 813.0183140611157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19353.125,
            "unit": "ns",
            "range": "± 2287.9525724289415"
          }
        ]
      },
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
          "id": "2e289bc95f74b8b004fc76d3d6bc676d93d27fc6",
          "message": "Fixed query for tx with actions",
          "timestamp": "2023-05-17T21:00:17+09:00",
          "tree_id": "f8c4460246e746dd9f69f8fa5995fb6dfd4e4db9",
          "url": "https://github.com/greymistcube/libplanet/commit/2e289bc95f74b8b004fc76d3d6bc676d93d27fc6"
        },
        "date": 1684325812053,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1368765.6565656567,
            "unit": "ns",
            "range": "± 128561.71087213582"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2561464.5569620254,
            "unit": "ns",
            "range": "± 132993.2146312068"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2137767.3469387754,
            "unit": "ns",
            "range": "± 151304.62123584226"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5297827.631578947,
            "unit": "ns",
            "range": "± 267511.0163955542"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48592.47311827957,
            "unit": "ns",
            "range": "± 3165.0687388352444"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7127557.142857143,
            "unit": "ns",
            "range": "± 169076.73574867882"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19151691.666666668,
            "unit": "ns",
            "range": "± 490594.01963481907"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48726627.777777776,
            "unit": "ns",
            "range": "± 1000066.358272146"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96345013.33333333,
            "unit": "ns",
            "range": "± 1795090.7994808932"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 191306246.66666666,
            "unit": "ns",
            "range": "± 3379003.907719101"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4754474.661458333,
            "unit": "ns",
            "range": "± 28290.93330098091"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1571022.2916666667,
            "unit": "ns",
            "range": "± 7216.215045649808"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1148388.739483173,
            "unit": "ns",
            "range": "± 7966.061797587733"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2639112.890625,
            "unit": "ns",
            "range": "± 8510.823196419538"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 907782.1428571428,
            "unit": "ns",
            "range": "± 2619.6998661769"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761962.0377604166,
            "unit": "ns",
            "range": "± 2197.7296048649646"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3043074.193548387,
            "unit": "ns",
            "range": "± 91243.95858627914"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3226268.9655172415,
            "unit": "ns",
            "range": "± 94473.40556794759"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3955563.6363636362,
            "unit": "ns",
            "range": "± 124595.59035681654"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4009575,
            "unit": "ns",
            "range": "± 179060.91154233768"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6544553.333333333,
            "unit": "ns",
            "range": "± 244071.55117077677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 262252,
            "unit": "ns",
            "range": "± 6986.422546625705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 247431.0344827586,
            "unit": "ns",
            "range": "± 10247.622007363836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 223670.52631578947,
            "unit": "ns",
            "range": "± 12846.506882485484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3969353.3333333335,
            "unit": "ns",
            "range": "± 50583.973558355225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3642443.3333333335,
            "unit": "ns",
            "range": "± 51170.9385528637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19447.916666666668,
            "unit": "ns",
            "range": "± 1589.6361163663025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86152.12765957447,
            "unit": "ns",
            "range": "± 5689.184773003709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72223.40425531915,
            "unit": "ns",
            "range": "± 5024.679426609896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96742.26804123711,
            "unit": "ns",
            "range": "± 18245.580715223587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5383.505154639175,
            "unit": "ns",
            "range": "± 822.0503345764904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17617.894736842107,
            "unit": "ns",
            "range": "± 1573.9893040384118"
          }
        ]
      }
    ]
  }
}