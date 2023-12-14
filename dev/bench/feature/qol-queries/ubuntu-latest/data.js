window.BENCHMARK_DATA = {
  "lastUpdate": 1702543948065,
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
          "id": "e8396a4c123eca45891de7a292befa11b49e186e",
          "message": "Added HelperQuery",
          "timestamp": "2023-12-14T10:21:08+09:00",
          "tree_id": "3b228ebd7e37b79a77a996183e1fef4220da9d13",
          "url": "https://github.com/greymistcube/libplanet/commit/e8396a4c123eca45891de7a292befa11b49e186e"
        },
        "date": 1702517521849,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201466.85714285713,
            "unit": "ns",
            "range": "± 11283.937919372562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194610.85185185185,
            "unit": "ns",
            "range": "± 8041.400521985987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166863.22641509434,
            "unit": "ns",
            "range": "± 6826.517018333471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3044787.4285714286,
            "unit": "ns",
            "range": "± 33106.52795659278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2846573.4,
            "unit": "ns",
            "range": "± 33749.62642502242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15394.697916666666,
            "unit": "ns",
            "range": "± 3123.529131303384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66354.36559139784,
            "unit": "ns",
            "range": "± 7007.70562028274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67024.06060606061,
            "unit": "ns",
            "range": "± 15903.051853062274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63632.97422680412,
            "unit": "ns",
            "range": "± 12969.182064363184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5081.994845360825,
            "unit": "ns",
            "range": "± 1566.3162071914635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11651.570588235294,
            "unit": "ns",
            "range": "± 920.6394877402091"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38557.197916666664,
            "unit": "ns",
            "range": "± 5028.370135896378"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 938658.6888888889,
            "unit": "ns",
            "range": "± 69673.674900079"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1917267.1860465116,
            "unit": "ns",
            "range": "± 103115.94838070983"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1402272.8695652173,
            "unit": "ns",
            "range": "± 110394.59719994833"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5670507.4375,
            "unit": "ns",
            "range": "± 110790.11571253021"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2419165.2592592593,
            "unit": "ns",
            "range": "± 51419.23985958847"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2458729.14516129,
            "unit": "ns",
            "range": "± 110950.31073026573"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3138715.6296296297,
            "unit": "ns",
            "range": "± 84403.91062355973"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2999317.3606557376,
            "unit": "ns",
            "range": "± 134107.41661009812"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6912244.631578947,
            "unit": "ns",
            "range": "± 136678.63930614377"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5783598.285714285,
            "unit": "ns",
            "range": "± 87345.47499016902"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14445378.5,
            "unit": "ns",
            "range": "± 165195.87282245109"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36460023,
            "unit": "ns",
            "range": "± 351472.5853300246"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75802264.92857143,
            "unit": "ns",
            "range": "± 383564.4402065897"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150578814.5,
            "unit": "ns",
            "range": "± 1126092.0682478473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3664847.0770089286,
            "unit": "ns",
            "range": "± 32461.01094282692"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1215408.6990559895,
            "unit": "ns",
            "range": "± 2012.9677342845143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 776471.6299479167,
            "unit": "ns",
            "range": "± 10861.545138547679"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1958009.1354166667,
            "unit": "ns",
            "range": "± 3156.1411634121137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 605106.5184151785,
            "unit": "ns",
            "range": "± 993.6449888369667"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580926.1092998798,
            "unit": "ns",
            "range": "± 4247.178731719508"
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
          "id": "481de08392e541495922a1ea17c1f8999b9268ab",
          "message": "Changelog",
          "timestamp": "2023-12-14T10:25:44+09:00",
          "tree_id": "27ee13100144e4d42b8e20df6b95145c81e45ff1",
          "url": "https://github.com/greymistcube/libplanet/commit/481de08392e541495922a1ea17c1f8999b9268ab"
        },
        "date": 1702517819427,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 212454.4375,
            "unit": "ns",
            "range": "± 13790.118145986391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192570.01234567902,
            "unit": "ns",
            "range": "± 10149.529514334428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169135.42105263157,
            "unit": "ns",
            "range": "± 3542.651381785329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3088684.653846154,
            "unit": "ns",
            "range": "± 19199.47611197657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2837672.4285714286,
            "unit": "ns",
            "range": "± 30392.96872814319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15441.3125,
            "unit": "ns",
            "range": "± 2296.8780152862414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 75068.97,
            "unit": "ns",
            "range": "± 15563.489193229703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58472.93258426966,
            "unit": "ns",
            "range": "± 9927.912766764946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67504.94252873563,
            "unit": "ns",
            "range": "± 10414.240720077889"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6352.939393939394,
            "unit": "ns",
            "range": "± 1705.2679292636508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16098.969072164948,
            "unit": "ns",
            "range": "± 3491.4075941684096"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43135.40625,
            "unit": "ns",
            "range": "± 5010.0214183345615"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 981649.78125,
            "unit": "ns",
            "range": "± 89280.18367785566"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1903847.404109589,
            "unit": "ns",
            "range": "± 94173.03861659313"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1404982.3775510204,
            "unit": "ns",
            "range": "± 95307.30917852435"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6103351.160493827,
            "unit": "ns",
            "range": "± 320369.90059552476"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2663668.625,
            "unit": "ns",
            "range": "± 92517.21267534352"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2597817.111111111,
            "unit": "ns",
            "range": "± 71928.05310721869"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3162079.6428571427,
            "unit": "ns",
            "range": "± 45688.685517157464"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3064394.7333333334,
            "unit": "ns",
            "range": "± 113056.34211963842"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7107042.695652174,
            "unit": "ns",
            "range": "± 178023.11827539164"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5713427.911764706,
            "unit": "ns",
            "range": "± 112573.56222769337"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14668314.033333333,
            "unit": "ns",
            "range": "± 71974.78186625673"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37348257.538461536,
            "unit": "ns",
            "range": "± 151261.13971683505"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75144089.28571428,
            "unit": "ns",
            "range": "± 682752.6762481619"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150152854.92307693,
            "unit": "ns",
            "range": "± 611204.100427517"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3754443.810096154,
            "unit": "ns",
            "range": "± 23954.296362773883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1202880.0592447917,
            "unit": "ns",
            "range": "± 2863.883865585733"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 807977.044140625,
            "unit": "ns",
            "range": "± 11730.460989855732"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1948383.1235677083,
            "unit": "ns",
            "range": "± 25258.045610357804"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622894.3125,
            "unit": "ns",
            "range": "± 10123.652492803903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 600362.8772786459,
            "unit": "ns",
            "range": "± 535.4132794764198"
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
          "id": "9d1ab2359dc80303f20eebc1a2f6763dc163d3ec",
          "message": "Changelog",
          "timestamp": "2023-12-14T17:41:13+09:00",
          "tree_id": "6c40197a1d91fc04606e7b0f0474621de8a1068f",
          "url": "https://github.com/greymistcube/libplanet/commit/9d1ab2359dc80303f20eebc1a2f6763dc163d3ec"
        },
        "date": 1702543941835,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 204075.27272727274,
            "unit": "ns",
            "range": "± 7554.37087668422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 207634.58823529413,
            "unit": "ns",
            "range": "± 9302.797339262095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 173791.3488372093,
            "unit": "ns",
            "range": "± 6385.206149052001"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3165829.846153846,
            "unit": "ns",
            "range": "± 42439.94614127543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2858311.2,
            "unit": "ns",
            "range": "± 36653.35609112564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15282.510204081633,
            "unit": "ns",
            "range": "± 2702.9199874686806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70829.48924731182,
            "unit": "ns",
            "range": "± 5734.542939776805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76806.81,
            "unit": "ns",
            "range": "± 20384.73720961223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 73593.60309278351,
            "unit": "ns",
            "range": "± 14477.291246037517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4230.215909090909,
            "unit": "ns",
            "range": "± 809.9884694633201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15760.414141414141,
            "unit": "ns",
            "range": "± 3584.592391395574"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42907.85567010309,
            "unit": "ns",
            "range": "± 5526.034635382942"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 951535.989010989,
            "unit": "ns",
            "range": "± 61813.66836936355"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1858457.4571428571,
            "unit": "ns",
            "range": "± 60164.350817691746"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1445174.53125,
            "unit": "ns",
            "range": "± 115739.24977433251"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5832860,
            "unit": "ns",
            "range": "± 177938.3982914203"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2390051.033333333,
            "unit": "ns",
            "range": "± 69556.5582408244"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2491302.742424242,
            "unit": "ns",
            "range": "± 60896.052832383095"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3228646.103448276,
            "unit": "ns",
            "range": "± 93873.86970723186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3031740.8333333335,
            "unit": "ns",
            "range": "± 104496.81575466903"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6976641.181818182,
            "unit": "ns",
            "range": "± 170546.54989031347"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5639615.857142857,
            "unit": "ns",
            "range": "± 42671.86413670135"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14570398,
            "unit": "ns",
            "range": "± 176098.53964394698"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37004676.115384616,
            "unit": "ns",
            "range": "± 192863.43983915081"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75470146,
            "unit": "ns",
            "range": "± 287954.84486923757"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152090845.76923078,
            "unit": "ns",
            "range": "± 968468.9031751918"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3607762.4344951925,
            "unit": "ns",
            "range": "± 8501.622087400694"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1214944.9337439905,
            "unit": "ns",
            "range": "± 1584.7969884406984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 788256.5522085336,
            "unit": "ns",
            "range": "± 1612.6240088824254"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1937077.2405598958,
            "unit": "ns",
            "range": "± 2453.885536819701"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620284.8232421875,
            "unit": "ns",
            "range": "± 1130.7848900752124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 583064.4904785156,
            "unit": "ns",
            "range": "± 13171.141310600944"
          }
        ]
      }
    ]
  }
}